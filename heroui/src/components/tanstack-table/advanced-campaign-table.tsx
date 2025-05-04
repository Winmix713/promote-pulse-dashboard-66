// New file for TanStack Table implementation
import React from 'react';
import { 
  useReactTable, 
  getCoreRowModel, 
  getSortedRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel,
  createColumnHelper,
  flexRender
} from '@tanstack/react-table';
import { Card, CardBody, CardHeader, Button, Checkbox, Input, Chip, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

// Define campaign data type
interface Campaign {
  id: string;
  title: string;
  image: string;
  likes: number;
  views: number;
  conversionRate: number;
  isPositive: boolean;
  status: 'active' | 'paused' | 'draft';
  platforms: string[];
  createdAt: string;
}

// Sample data
const campaignData: Campaign[] = [
  {
    id: '1',
    title: "Hurry! 50% off everything! 🔥",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=1",
    likes: 320,
    views: 742,
    conversionRate: 12.6,
    isPositive: true,
    status: 'active',
    platforms: ['facebook', 'instagram'],
    createdAt: '2023-05-12'
  },
  {
    id: '2',
    title: "Last chance! 60% off clearance! 🛒",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=2",
    likes: 368,
    views: 143,
    conversionRate: 24.3,
    isPositive: true,
    status: 'active',
    platforms: ['facebook', 'twitter'],
    createdAt: '2023-06-03'
  },
  {
    id: '3',
    title: "Exclusive! Buy one, get one free! 🎉",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=3",
    likes: 45,
    views: 190,
    conversionRate: 7.6,
    isPositive: false,
    status: 'paused',
    platforms: ['instagram'],
    createdAt: '2023-06-15'
  },
  {
    id: '4',
    title: "Limited offer! 40% off sitewide! 🎈",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=4",
    likes: 320,
    views: 742,
    conversionRate: 20.9,
    isPositive: true,
    status: 'active',
    platforms: ['facebook', 'instagram', 'twitter'],
    createdAt: '2023-07-01'
  },
  {
    id: '5',
    title: "Flash sale! Save 30%! ⚡",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=5",
    likes: 403,
    views: 168,
    conversionRate: 55.6,
    isPositive: true,
    status: 'active',
    platforms: ['facebook'],
    createdAt: '2023-07-15'
  },
  {
    id: '6',
    title: "Weekend special! Extra 25% off! 🏷️",
    image: "https://img.heroui.chat/image/ai?w=200&h=200&u=6",
    likes: 210,
    views: 320,
    conversionRate: 15.2,
    isPositive: true,
    status: 'draft',
    platforms: ['instagram', 'twitter'],
    createdAt: '2023-08-01'
  }
];

// Column helper
const columnHelper = createColumnHelper<Campaign>();

// Define columns
const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        isSelected={table.getIsAllRowsSelected()}
        onValueChange={table.getToggleAllRowsSelectedHandler()}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        isSelected={row.getIsSelected()}
        onValueChange={row.getToggleSelectedHandler()}
        aria-label={`Select row ${row.id}`}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('title', {
    header: 'Campaign',
    cell: info => (
      <div className="flex items-center gap-3">
        <img
          src={info.row.original.image}
          alt={info.getValue()}
          className="h-10 w-10 rounded-lg object-cover"
        />
        <div>
          <div className="font-medium">{info.getValue()}</div>
          <div className="flex gap-2 text-default-400 mt-1">
            {info.row.original.platforms.map(platform => (
              <div key={platform} className="w-5 h-5 rounded-full bg-default-100 flex items-center justify-center">
                <Icon icon={`logos:${platform}`} className="w-3 h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('likes', {
    header: 'Likes',
    cell: info => (
      <div className="text-center">
        <div className="font-medium">{info.getValue().toLocaleString()}</div>
      </div>
    ),
  }),
  columnHelper.accessor('views', {
    header: 'Views',
    cell: info => (
      <div className="text-center">
        <div className="font-medium">{info.getValue().toLocaleString()}</div>
      </div>
    ),
  }),
  columnHelper.accessor('conversionRate', {
    header: 'Conversion',
    cell: info => (
      <div className="text-center">
        <div
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
            info.row.original.isPositive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
          }`}
        >
          <Icon icon={info.row.original.isPositive ? "lucide:arrow-up" : "lucide:arrow-down"} className="w-3 h-3" />
          <span>{info.getValue()}%</span>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => {
      const status = info.getValue();
      let color = 'default';
      if (status === 'active') color = 'success';
      if (status === 'paused') color = 'warning';
      if (status === 'draft') color = 'default';
      
      return (
        <div className="text-center">
          <Chip color={color as any} size="sm" variant="flat">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Chip>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex justify-center gap-2">
        <Button isIconOnly size="sm" variant="flat" color="primary">
          <Icon icon="lucide:eye" className="w-4 h-4" />
        </Button>
        <Button isIconOnly size="sm" variant="flat">
          <Icon icon="lucide:edit-2" className="w-4 h-4" />
        </Button>
        <Button isIconOnly size="sm" variant="flat" color="danger">
          <Icon icon="lucide:trash-2" className="w-4 h-4" />
        </Button>
      </div>
    ),
  }),
];

export const AdvancedCampaignTable = () => {
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [rowSelection, setRowSelection] = React.useState({});
  
  const table = useReactTable({
    data: campaignData,
    columns,
    state: {
      globalFilter,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  
  return (
    <Card className="border-none shadow-card">
      <CardHeader className="flex flex-col gap-4 px-6 pt-6 pb-0">
        <div className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-xl font-semibold">Campaigns</h3>
            <p className="text-sm text-default-500">Marketing performance</p>
          </div>
          
          <Button 
            color="primary" 
            radius="full" 
            size="sm"
            startContent={<Icon icon="lucide:plus" className="w-4 h-4" />}
          >
            New Campaign
          </Button>
        </div>
        
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            {Object.keys(rowSelection).length > 0 && (
              <div className="flex items-center gap-2">
                <Chip color="primary" variant="flat" size="sm">
                  {Object.keys(rowSelection).length} selected
                </Chip>
                <Button 
                  size="sm"
                  color="danger" 
                  variant="flat"
                  startContent={<Icon icon="lucide:trash-2" className="w-3.5 h-3.5" />}
                >
                  Delete
                </Button>
                <Button 
                  size="sm"
                  color="primary" 
                  variant="flat"
                  startContent={<Icon icon="lucide:archive" className="w-3.5 h-3.5" />}
                >
                  Archive
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search campaigns..."
              value={globalFilter ?? ''}
              onValueChange={setGlobalFilter}
              startContent={<Icon icon="lucide:search" className="text-default-400 w-4 h-4" />}
              size="sm"
              radius="full"
              className="w-64"
              clearable
            />
            
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  size="sm"
                  variant="flat"
                  radius="full"
                  startContent={<Icon icon="lucide:filter" className="w-3.5 h-3.5" />}
                >
                  Filter
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Filter options">
                <DropdownItem key="all">All campaigns</DropdownItem>
                <DropdownItem key="active">Active campaigns</DropdownItem>
                <DropdownItem key="paused">Paused campaigns</DropdownItem>
                <DropdownItem key="draft">Draft campaigns</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </CardHeader>
      
      <CardBody className="px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-full table-fixed">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="border-b border-default-100">
                  {headerGroup.headers.map(header => (
                    <th 
                      key={header.id} 
                      className={`py-3 px-4 text-sm font-medium text-default-600 text-left ${
                        header.id === 'likes' || header.id === 'views' || header.id === 'conversionRate' || header.id === 'status' 
                          ? 'text-center' 
                          : ''
                      }`}
                      style={{ width: header.id === 'select' ? '40px' : header.id === 'actions' ? '120px' : 'auto' }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={`flex items-center ${header.column.getCanSort() ? 'cursor-pointer select-none' : ''} ${
                            header.id === 'likes' || header.id === 'views' || header.id === 'conversionRate' || header.id === 'status' 
                              ? 'justify-center' 
                              : ''
                          }`}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <Icon icon="lucide:chevron-up" className="ml-1 w-4 h-4" />,
                            desc: <Icon icon="lucide:chevron-down" className="ml-1 w-4 h-4" />,
                          }[header.column.getIsSorted() as string] ?? (
                            header.column.getCanSort() ? <Icon icon="lucide:chevron-up-down" className="ml-1 w-4 h-4 text-default-300" /> : null
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr 
                  key={row.id} 
                  className="border-b border-default-100 hover:bg-content2/50 transition-colors"
                >
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="py-4 px-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-default-500">
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getPrePaginationRowModel().rows.length
            )} of {table.getPrePaginationRowModel().rows.length} entries
          </div>
          
          <Pagination
            total={Math.ceil(table.getFilteredRowModel().rows.length / table.getState().pagination.pageSize)}
            initialPage={1}
            page={table.getState().pagination.pageIndex + 1}
            onChange={(page) => table.setPageIndex(page - 1)}
            showControls
            size="sm"
          />
        </div>
      </CardBody>
    </Card>
  );
};