
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
}

const Comments: React.FC = () => {
  const comments: Comment[] = [
    {
      id: '1',
      user: {
        name: 'Alice Cooper',
        avatar: '/placeholder.svg',
      },
      content: 'Just bought the new product! Amazing quality and fast shipping.',
      time: '5m ago'
    },
    {
      id: '2',
      user: {
        name: 'Bob Johnson',
        avatar: '/placeholder.svg',
      },
      content: 'Customer service was very helpful. Would recommend!',
      time: '10m ago'
    },
    {
      id: '3',
      user: {
        name: 'Emma Smith',
        avatar: '/placeholder.svg',
      },
      content: 'Love the new dashboard update! So much easier to use now.',
      time: '25m ago'
    }
  ];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-lg">Recent Comments</h2>
        <Button variant="link" size="sm" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
          View all
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3 p-2 hover:bg-muted/50 rounded-md transition-colors">
            <Avatar className="h-9 w-9">
              <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
              <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm">{comment.user.name}</h3>
                <span className="text-xs text-muted-foreground">{comment.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
