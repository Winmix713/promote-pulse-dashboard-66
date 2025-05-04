import React from 'react';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { StatCards } from './components/stat-cards';
import { CampaignList } from './components/campaign-list';
import { MainLayout } from './components/main-layout';
import { useMediaQuery } from './hooks/use-media-query';
import { Icon } from '@iconify/react';
import { Tabs, Tab } from '@heroui/react';
import { useTheme } from './context/theme-context';

// Feature Components
import { RevenueChart } from './components/nivo-charts/revenue-chart';
import { SalesDistribution } from './components/nivo-charts/sales-distribution';
import { AdvancedCampaignTable } from './components/tanstack-table/advanced-campaign-table';
import { CampaignForm } from './components/react-hook-form/campaign-form';
import { ProductGallery } from './components/embla-carousel/product-gallery';
import { TaskBoard } from './components/react-beautiful-dnd/task-board';
import { WeeklyRevenueChart } from './components/weekly-revenue-chart';
import { FeaturedProducts } from './components/featured-products';
import { DashboardWelcome } from './components/dashboard-welcome';
import { DashboardTabs } from './components/dashboard-tabs';
import { ActivityTimeline } from './components/activity-timeline';
import { RevenueOverview } from './components/revenue-overview';
import { CustomerAvatars } from './components/customer-avatars';
import { CommentsSection } from './components/comments-section';
import { OverviewMetrics } from './components/overview-metrics';
import { RefundRequests } from './components/refund-requests';

export default function App() {
  const { theme } = useTheme();
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <MainLayout>
      <TabsView activeTab={activeTab} onTabChange={setActiveTab} />
      <CampaignList />
    </MainLayout>
  );
}

interface TabsViewProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

const TabsView = ({ activeTab, onTabChange }: TabsViewProps) => {
  return (
    <main className="p-6 md:p-8">
      <Tabs
        selectedKey={activeTab}
        onSelectionChange={onTabChange as any}
        color="primary"
        variant="underlined"
        size="lg"
        classNames={{
          tabList: 'gap-6',
          cursor: 'w-full',
          tab: 'px-0 h-12',
        }}
      >
        {TAB_CONFIG.map(({ key, label, icon }) => (
          <Tab
            key={key}
            title={
              <div className="flex items-center gap-2">
                <Icon icon={icon} className="w-4 h-4" />
                <span>{label}</span>
              </div>
            }
          />
        ))}
      </Tabs>

      {activeTab === 'dashboard' && <DashboardView />}
      {activeTab === 'campaigns' && <CampaignsView />}
      {activeTab === 'products' && <ProductsView />}
      {activeTab === 'tasks' && <TasksView />}
    </main>
  );
};

const TAB_CONFIG = [
  { key: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
  { key: 'campaigns', label: 'Campaigns', icon: 'lucide:megaphone' },
  { key: 'products', label: 'Products', icon: 'lucide:shopping-bag' },
  { key: 'tasks', label: 'Tasks', icon: 'lucide:check-square' },
];

const DashboardView = () => (
  <>
    <DashboardWelcome />
    <DashboardTabs activeTab="overview" onTabChange={(key) => console.log(key)} />
    
    <StatCards />

    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <CustomerAvatars />
        <RevenueOverview />
        <CommentsSection />
      </div>
      <div className="space-y-6">
        <FeaturedProducts />
        <OverviewMetrics />
        <RefundRequests />
      </div>
    </div>
  </>
);

const CampaignsView = () => (
  <div className="mt-6 grid grid-cols-1 gap-6">
    <AdvancedCampaignTable />
    <CampaignForm />
  </div>
);

const ProductsView = () => (
  <div className="mt-6">
    <ProductGallery />
  </div>
);

const TasksView = () => (
  <div className="mt-6">
    <TaskBoard />
  </div>
);

// Optional - extracted metric box (can be reused elsewhere)
export const QuickMetric = ({
  icon,
  label,
  value,
  change,
  isPositive,
}: {
  icon: string;
  label: string;
  value: string;
  change: number;
  isPositive: boolean;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`rounded-full p-3 ${
          isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
        }`}
      >
        <Icon icon={icon} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-default-500">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">{value}</span>
          <span
            className={`text-xs flex items-center ${
              isPositive ? 'text-success' : 'text-danger'
            }`}
          >
            <Icon
              icon={isPositive ? 'lucide:arrow-up' : 'lucide:arrow-down'}
              className="w-3 h-3 mr-0.5"
            />
            {change}%
          </span>
        </div>
      </div>
    </div>
  );
};

// export default function App() {
//   return (
//     <div className="flex min-h-screen items-center justify-center p-8">
//       <p className="text-default-600 text-medium" id="sandbox-message">
//         Your AI-generated components will be rendered here
//       </p>
//     </div>
//   );
// }