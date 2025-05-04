import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardBody, CardHeader, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

// Dummy product data
const products = [
  // ... (same as before)
];

// Individual card component
const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => (
  <motion.div
    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <div className="bg-content2 rounded-xl overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-default-500 mb-1">{product.category}</div>
        <h4 className="font-medium mb-1">{product.name}</h4>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{product.price}</span>
          <Button size="sm" color="primary" variant="flat" isIconOnly radius="full">
            <Icon icon="lucide:shopping-cart" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ProductGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Card className="border-none shadow-card">
      <CardHeader className="px-6 pt-6 pb-0 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Featured Products</h3>
          <p className="text-sm text-default-500">Our top selling items</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            onPress={scrollPrev}
            isDisabled={selectedIndex === 0}
          >
            <Icon icon="lucide:chevron-left" className="w-4 h-4" />
          </Button>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            onPress={scrollNext}
            isDisabled={selectedIndex === scrollSnaps.length - 1}
          >
            <Icon icon="lucide:chevron-right" className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardBody className="px-6 pb-6 pt-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} index={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-1">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              size="sm"
              isIconOnly
              variant={selectedIndex === index ? 'solid' : 'light'}
              color={selectedIndex === index ? 'primary' : 'default'}
              className="min-w-6 w-6 h-2 p-0 rounded-full"
              onPress={() => scrollTo(index)}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
