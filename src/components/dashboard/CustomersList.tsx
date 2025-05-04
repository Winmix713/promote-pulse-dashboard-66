
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  image: string;
}

const CustomersList: React.FC = () => {
  const customers: Customer[] = [
    { id: "1", name: "Gladyce", image: "/placeholder.svg" },
    { id: "2", name: "Elbert", image: "/placeholder.svg" },
    { id: "3", name: "Joyce", image: "/placeholder.svg" },
    { id: "4", name: "John", image: "/placeholder.svg" },
    { id: "5", name: "Anna", image: "/placeholder.svg" },
    { id: "6", name: "Tom", image: "/placeholder.svg" },
    { id: "7", name: "Sarah", image: "/placeholder.svg" },
  ];
  
  return (
    <div className="p-5">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="text-lg font-medium">857 new customers today!</div>
        </div>
        <div className="text-sm text-muted-foreground">Send a welcome message to all new customers.</div>
      </div>
      
      <div className="relative before:absolute before:-left-6 before:top-0 before:bottom-0 before:z-3 before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent before:pointer-events-none after:absolute after:-right-6 after:top-0 after:bottom-0 after:z-3 after:w-12 after:bg-gradient-to-l after:from-background after:to-transparent after:pointer-events-none max-md:before:block max-md:after:block">
        <div className="flex gap-4 max-md:overflow-auto max-md:-mx-6 max-md:px-6 max-md:scrollbar-none">
          {customers.map((customer) => (
            <div key={customer.id} className="flex-none text-center w-20">
              <Avatar className="size-16 mx-auto">
                <AvatarImage src={customer.image} alt={customer.name} />
                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="mt-3 text-sm text-muted-foreground truncate">{customer.name}</div>
            </div>
          ))}
          
          <div className="flex-none text-center w-20">
            <a className="group inline-flex flex-col justify-center items-center" href="/customers">
              <div className="flex justify-center items-center size-16 rounded-full border border-muted transition-colors group-hover:border-primary group-hover:text-primary group-hover:shadow-sm">
                <ChevronRight className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">View all</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersList;
