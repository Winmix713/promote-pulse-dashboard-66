
import React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'offline';
  image: string;
  percentage: number;
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Headphones',
      price: 299.99,
      status: 'active',
      image: '/placeholder.svg',
      percentage: 24
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      status: 'active',
      image: '/placeholder.svg',
      percentage: 21
    },
    {
      id: '3',
      name: 'Wireless Earbuds',
      price: 129.99,
      status: 'offline',
      image: '/placeholder.svg',
      percentage: 18
    },
    {
      id: '4',
      name: 'Bluetooth Speaker',
      price: 89.99,
      status: 'active',
      image: '/placeholder.svg',
      percentage: 12
    },
    {
      id: '5',
      name: 'Power Bank',
      price: 49.99,
      status: 'active',
      image: '/placeholder.svg',
      percentage: 9
    }
  ];

  return (
    <div className="bg-card border rounded-lg shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-medium text-lg">Top Products</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center py-2 hover:bg-muted/50 rounded-md px-1 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-muted overflow-hidden mr-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-grow mr-2">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                <span className="text-xs text-muted-foreground">{Math.floor(Math.random() * 300) + 100} sales</span>
              </div>
            </div>
            <div className="text-right font-medium">
              {product.percentage}%
            </div>
          </div>
        ))}

        <Button variant="link" size="sm" className="w-full text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-1 mt-4">
          View all products
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PopularProducts;
