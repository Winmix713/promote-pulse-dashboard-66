
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'offline';
  image: string;
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Crypter - NFT UI Kit',
      price: 3250.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Bento Pro 2.0 Illustrations',
      price: 7890.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Fleet - travel shopping kit',
      price: 1500.00,
      status: 'offline',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'SimpleSocial UI Design Kit',
      price: 9999.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '5',
      name: 'SimpleSocial UI Design Kit',
      price: 4750.00,
      status: 'active',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm p-5">
      <h2 className="font-medium text-lg mb-4">Popular products</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div className="h-12 w-12 rounded-lg bg-gray-100 overflow-hidden mr-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">{product.name}</h3>
              <span className={`text-xs ${product.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                {product.status === 'active' ? 'Active' : 'Offline'}
              </span>
            </div>
            <div className="text-right">
              <p className="font-medium">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="/products" className="text-sm text-gray-500 hover:text-gray-900">
          All products
        </a>
      </div>
    </div>
  );
};

export default PopularProducts;
