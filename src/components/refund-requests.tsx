import React from 'react';
import { Card, CardBody, CardHeader, Button, Avatar, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';

interface RefundRequest {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  amount: string;
  product: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

export const RefundRequests = () => {
  const requests: RefundRequest[] = [
    {
      id: 1,
      user: {
        name: "Emma Davis",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4"
      },
      amount: "$78.50",
      product: "Premium Plan Subscription",
      status: 'pending',
      date: "Today"
    },
    {
      id: 2,
      user: {
        name: "Alex Johnson",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
      },
      amount: "$125.00",
      product: "Annual Membership",
      status: 'approved',
      date: "Yesterday"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'approved': return 'success';
      case 'rejected': return 'danger';
      default: return 'default';
    }
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <h3 className="text-lg font-semibold">Refund requests</h3>
          <p className="text-sm text-default-500">Recent customer refunds</p>
        </div>
        <Button 
          variant="light" 
          color="primary" 
          size="sm"
          endContent={<Icon icon="lucide:chevron-right" className="w-4 h-4" />}
        >
          View all
        </Button>
      </CardHeader>
      
      <CardBody className="px-6 py-4">
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="flex items-center gap-3 p-3 bg-content2 rounded-xl">
              <Avatar
                src={request.user.avatar}
                size="md"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="font-medium text-sm">{request.user.name}</p>
                  <Chip 
                    color={getStatusColor(request.status) as any}
                    variant="flat"
                    size="sm"
                  >
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Chip>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-xs text-default-500">
                    {request.product} - {request.amount}
                  </p>
                  <p className="text-xs text-default-500">{request.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};