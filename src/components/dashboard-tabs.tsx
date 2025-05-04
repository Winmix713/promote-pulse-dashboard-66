import React from 'react';
import { Tabs, Tab, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

export const DashboardTabs = ({ activeTab, onTabChange }: DashboardTabsProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
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
        <Tab
          key="overview"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:home" className="w-4 h-4" />
              <span>Overview</span>
            </div>
          }
        />
        <Tab
          key="analytics"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:bar-chart-2" className="w-4 h-4" />
              <span>Analytics</span>
            </div>
          }
        />
        <Tab
          key="reports"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:file-text" className="w-4 h-4" />
              <span>Reports</span>
            </div>
          }
        />
        <Tab
          key="notifications"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:bell" className="w-4 h-4" />
              <span>Notifications</span>
            </div>
          }
        />
      </Tabs>
      
      <div className="flex items-center gap-2">
        <ActionButton icon="lucide:download" label="Export" />
        <ActionButton icon="lucide:file-text" label="Reports" />
        <ActionButton icon="lucide:settings" label="Settings" />
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <Button
      variant="flat"
      color="default"
      className="bg-content1 border border-default-200"
      startContent={<Icon icon={icon} className="w-4 h-4" />}
    >
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
};