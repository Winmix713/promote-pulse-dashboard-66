
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Check, User, ShoppingCart, AlertTriangle, UserX } from "lucide-react";

interface ActivityItem {
  id: number;
  icon: React.ReactNode;
  iconColor: 'success' | 'primary' | 'warning' | 'danger' | 'purple';
  title: string;
  description: string;
  time: string;
}

export const ActivityTimeline = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      icon: <Check size={16} />,
      iconColor: "success",
      title: "Order #1234 was completed",
      description: "Customer: Sarah Johnson",
      time: "2 hours ago"
    },
    {
      id: 2,
      icon: <User size={16} />,
      iconColor: "primary",
      title: "New customer registered",
      description: "User: michael@example.com",
      time: "3 hours ago"
    },
    {
      id: 3,
      icon: <ShoppingCart size={16} />,
      iconColor: "warning",
      title: "New order #4567 received",
      description: "$156.00 - 3 items",
      time: "5 hours ago"
    },
    {
      id: 4,
      icon: <AlertTriangle size={16} />,
      iconColor: "danger",
      title: "Inventory alert: Product #127",
      description: "Only 2 items left in stock",
      time: "8 hours ago"
    },
    {
      id: 5,
      icon: <UserX size={16} />,
      iconColor: "purple",
      title: "Customer #245 requested a refund",
      description: "Order #1122 - $78.50",
      time: "Yesterday"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <h3 className="text-xl font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Latest actions and updates</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          View all
          <Home className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="px-6 py-2">
        <div className="space-y-5">
          {activities.map((activity) => (
            <ActivityRow key={activity.id} activity={activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ActivityRow = ({ activity }: { activity: ActivityItem }) => {
  const getIconColorClass = () => {
    switch (activity.iconColor) {
      case "success": return "bg-green-100 text-green-600";
      case "primary": return "bg-blue-100 text-blue-600";
      case "warning": return "bg-yellow-100 text-yellow-600";
      case "danger": return "bg-red-100 text-red-600";
      case "purple": return "bg-purple-100 text-purple-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };
  
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2.5 rounded-full ${getIconColorClass()}`}>
        {activity.icon}
      </div>
      
      <div className="flex-1">
        <p className="font-medium text-sm">{activity.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
      </div>
      
      <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
    </div>
  );
};
