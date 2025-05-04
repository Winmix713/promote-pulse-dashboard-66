
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MoreHorizontal, MessageSquare, ShoppingBag, FileText } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const activityItems = [
  {
    icon: <MessageSquare className="h-4 w-4" />,
    iconBg: "bg-blue-500/10 text-blue-500",
    title: "New message from Sophie",
    description: "I've sent the files you requested",
    time: "5m ago",
    avatar: "/placeholder.svg",
    initials: "SC"
  },
  {
    icon: <ShoppingBag className="h-4 w-4" />,
    iconBg: "bg-emerald-500/10 text-emerald-500",
    title: "New order #1832412",
    description: "Macbook Pro 14" with M2 chip",
    time: "2h ago",
    avatar: "/placeholder.svg",
    initials: "JD"
  },
  {
    icon: <FileText className="h-4 w-4" />,
    iconBg: "bg-amber-500/10 text-amber-500",
    title: "New document uploaded",
    description: "Sales report for Q2 2024",
    time: "1d ago",
    avatar: "/placeholder.svg",
    initials: "AT"
  }
];

export const ActivityList: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="space-y-5">
          {activityItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`rounded-full p-2 ${item.iconBg} mt-0.5`}>
                {item.icon}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Avatar className="h-9 w-9">
                <AvatarImage src={item.avatar} alt={item.initials} />
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
