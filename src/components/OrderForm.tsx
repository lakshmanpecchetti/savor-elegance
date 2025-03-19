
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShoppingCart, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const orderSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  address: z.string().min(5, { message: 'Please enter your delivery address' }),
  items: z.string().min(2, { message: 'Please enter at least one item' }),
  specialInstructions: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

const OrderForm = () => {
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      items: '',
      specialInstructions: '',
    },
  });

  const onSubmit = (data: OrderFormValues) => {
    toast.success('Order received!', {
      description: `Thanks ${data.name}! Your order has been placed and will be delivered to ${data.address}.`,
      duration: 5000,
    });
    form.reset();
    document.getElementById('close-order-dialog')?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-outline flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          <span>Order Online</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-playfair">Place Your Order</DialogTitle>
        </DialogHeader>
        <div className="mb-6 space-y-2 text-sm text-muted-foreground border-b pb-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-restaurant-gold" />
            <span>Delivery Time: 30-45 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-restaurant-gold" />
            <span>Delivery radius: 5 miles from restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-restaurant-gold" />
            <span>For assistance call: (123) 456-7890</span>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, Apartment 4B" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order Items</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., 2x Butter Chicken, 1x Naan, 1x Mango Lassi" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Less spicy, allergies, delivery instructions" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between mt-6">
              <DialogClose id="close-order-dialog" asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                Place Order
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
