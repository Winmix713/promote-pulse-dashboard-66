
import React from 'react';
import { Check, User, ShoppingCart, AlertTriangle, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  iconColor: string; 
  user?: {
    name: string;
    avatar: string;
  };
}

const ActivityTimeline: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'Order #1234 was completed',
      description: 'Customer: Sarah Johnson',
      time: '2 hours ago',
      icon: <Check className="h-4 w-4" />,
      iconColor: 'bg-green-500 text-white',
      user: {
        name: 'Sarah J',
        avatar: '/placeholder.svg',
      }
    },
    {
      id: '2',
      title: 'New customer registered',
      description: 'User: michael@example.com',
      time: '3 hours ago',
      icon: <User className="h-4 w-4" />,
      iconColor: 'bg-blue-500 text-white',
      user: {
        name: 'Michael',
        avatar: '/placeholder.svg',
      }
    },
    {
      id: '3',
      title: 'New order #4567 received',
      description: '$156.00 - 3 items',
      time: '5 hours ago',
      icon: <ShoppingCart className="h-4 w-4" />,
      iconColor: 'bg-orange-500 text-white'
    },
    {
      id: '4',
      title: 'Inventory alert: Product #127',
      description: 'Only 2 items left in stock',
      time: '8 hours ago',
      icon: <AlertTriangle className="h-4 w-4" />,
      iconColor: 'bg-red-500 text-white'
    },
    {
      id: '5',
      title: 'Customer #245 requested a refund',
      description: 'Order #1122 - $78.50',
      time: 'Yesterday',
      icon: <UserX className="h-4 w-4" />,
      iconColor: 'bg-purple-500 text-white',
      user: {
        name: 'User 245',
        avatar: '/placeholder.svg',
      }
    },
  ];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-lg">Recent Activity</h2>
        <Button variant="link" size="sm" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
          View all
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-3 p-2 hover:bg-muted/50 rounded-md transition-colors">
            {activity.user ? (
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ) : (
              <div className={`flex items-center justify-center h-8 w-8 rounded-full ${activity.iconColor} shrink-0`}>
                {activity.icon}
              </div>
            )}
            <div className="flex-grow">
              <div className="flex items-baseline gap-2">
                <h3 className="font-medium text-sm">{activity.title}</h3>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
