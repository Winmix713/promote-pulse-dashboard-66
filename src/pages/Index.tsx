
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "@/components/promote/Sidebar";
import StatCard from "@/components/promote/StatCard";
import CampaignList from "@/components/promote/CampaignList";
import SimpleChart from "@/components/promote/SimpleChart";
import InteractionMetrics from "@/components/promote/InteractionMetrics";
import { Calendar, ChevronDown, CircleHelp, FileText, Grid, Link2, Mail, MessageSquare, Package, Search, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b bg-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Promote</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search anything..."
                className="h-10 w-64 md:w-80 rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:outline-none"
              />
            </div>
            <Button className="rounded-full bg-gray-900 text-white">Create</Button>
            <button className="rounded-full border p-2">
              <MessageSquare size={18} />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 md:p-6">
          {/* Insights section */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium">Insights</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last 7 days</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
            <StatCard
              icon={<Package size={20} />}
              title="Product views"
              value="106k"
              change={36.8}
              isPositive={true}
              period="vs last year"
              newCustomers={42.6}
              reached="34,002"
            />
            <StatCard
              icon={<MessageSquare size={20} />}
              title="Engagement rate"
              value="12.6%"
              change={24.5}
              isPositive={false}
              period="vs last year"
              newCustomers={12.8}
              reached="9,875"
            />
            <StatCard
              icon={<Grid size={20} />}
              title="Interactions"
              value="59.9K"
              change={20.5}
              isPositive={true}
              period="vs last year"
              newCustomers={27.5}
              reached="24,156"
            />
          </div>

          {/* Tabs and content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <Tabs defaultValue="published" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="published">Published</TabsTrigger>
                    <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button className="rounded-full bg-gray-900 text-white">New post</Button>
              </div>

              {/* Campaign list */}
              <CampaignList />
            </div>

            <div className="space-y-6">
              {/* Engagement chart */}
              <div className="rounded-lg border bg-white p-4">
                <h3 className="mb-4 text-lg font-medium">Engagement</h3>
                <SimpleChart />
              </div>

              {/* Interactions */}
              <div className="rounded-lg border bg-white p-4">
                <h3 className="mb-4 text-lg font-medium">Interactions</h3>
                <Tabs defaultValue="all" className="mb-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="followers">Followers</TabsTrigger>
                    <TabsTrigger value="non-followers">Non-followers</TabsTrigger>
                  </TabsList>
                </Tabs>

                <InteractionMetrics />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
