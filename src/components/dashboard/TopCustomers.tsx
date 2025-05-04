
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const customers = [
  {
    name: "Olivia Martin",
    email: "olivia@example.com",
    amount: "$1,999.00",
    avatar: "/placeholder.svg",
    initials: "OM"
  },
  {
    name: "Jackson Lee",
    email: "jackson@example.com",
    amount: "$1,497.00",
    avatar: "/placeholder.svg",
    initials: "JL"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    amount: "$1,147.00",
    avatar: "/placeholder.svg",
    initials: "IN"
  },
  {
    name: "William Kim",
    email: "will@example.com",
    amount: "$975.00",
    avatar: "/placeholder.svg",
    initials: "WK"
  }
];

export const TopCustomers: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Top Customers</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="space-y-4">
          {customers.map((customer, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={customer.avatar} alt={customer.name} />
                  <AvatarFallback>{customer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{customer.name}</p>
                  <p className="text-xs text-muted-foreground">{customer.email}</p>
                </div>
              </div>
              <p className="text-sm font-medium">{customer.amount}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
