
import React from 'react';
import { useLazyImageLoad } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';

// Featured dish data
const featuredDishes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, aromatic tomato gravy with a touch of butter and cream",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Lamb Kebab Platter",
    description: "Succulent marinated lamb skewers grilled to perfection, served with mint chutney",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Tandoori Mixed Grill",
    description: "Selection of chicken, lamb and prawns marinated in spices and char-grilled",
    price: "$26.99",
    image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Prawn Masala",
    description: "Jumbo prawns cooked with aromatic spices in a rich tomato-based sauce",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&q=80"
  }
];

const DishCard = ({ dish }: { dish: typeof featuredDishes[0] }) => {
  const { loaded, imgRef } = useLazyImageLoad(dish.image);
  
  return (
    <div className="dish-card group reveal">
      <img
        ref={imgRef}
        src={dish.image}
        alt={dish.name}
        className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 ${loaded ? 'blur-0' : 'blur-md'}`}
      />
      <div className="dish-card-content transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 mb-2 bg-restaurant-gold text-restaurant-dark text-sm font-semibold rounded-full">
          Chef's Special
        </span>
        <h3 className="text-white text-xl font-bold mb-1">{dish.name}</h3>
        <p className="text-white/90 text-sm mb-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
          {dish.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-restaurant-gold font-bold">{dish.price}</span>
          <button className="text-white bg-restaurant-burgundy/90 hover:bg-restaurant-burgundy p-2 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedDishes = () => {
  return (
    <section id="menu" className="section-padding bg-restaurant-dark relative">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 reveal">
          <span className="text-restaurant-gold uppercase tracking-wider font-medium mb-2 inline-block">
            Exquisite Selection
          </span>
          <h2 className="heading-lg text-white mb-4">Chef's Signature Creations</h2>
          <div className="divider"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Indulge in our chef's handcrafted selection of premium non-vegetarian delicacies, 
            prepared with the finest ingredients and authentic spices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <a href="#full-menu" className="btn-outline inline-flex items-center gap-2">
            <span>View Full Menu</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
