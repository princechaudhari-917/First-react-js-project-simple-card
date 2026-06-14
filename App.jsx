import React from 'react'
import Card from './Components/Card'


const App = () => {
  const destinations = [
  {
    id: 1,
    title: "Banaras (Kashi)",
    category: "Spirituality | Culture",
    rating: 4.5,
    date: "Nov 12-17",
    host: "superhost",
    price: 239,
    tag: "Top rated",
    image:
      "https://i.pinimg.com/1200x/82/18/7d/82187d39f4dc4ec89ad717a05788ff58.jpg",
    description:
      "The luminous city of lights. Experience the timeless Ganga Aarti, sacred rituals on the ghats, and Banarasi silk culture."
  },

  {
    id: 2,
    title: "Jaipur",
    category: "History | Heritage",
    rating: 4.8,
    date: "Dec 05-10",
    host: "superhost",
    price: 199,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200",
    description:
      "Explore majestic forts, royal palaces, colorful markets, and authentic Rajasthani culture."
  },

  {
    id: 3,
    title: "Goa",
    category: "Beach | Nightlife",
    rating: 4.7,
    date: "Jan 15-20",
    host: "superhost",
    price: 299,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200",
    description:
      "Golden beaches, water sports, vibrant nightlife, and unforgettable sunsets."
  },

  {
    id: 4,
    title: "Manali",
    category: "Mountains | Adventure",
    rating: 4.9,
    date: "Feb 01-07",
    host: "superhost",
    price: 259,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    description:
      "Snow-capped mountains, thrilling adventures, and peaceful Himalayan landscapes."
  },
  {
  id: 5,
  title: "Udaipur",
  category: "Lakes | Royalty",
  rating: 4.8,
  date: "Mar 10-15",
  host: "superhost",
  price: 279,
  tag: "Luxury",
  image:
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200",
  description:
    "Discover the City of Lakes, magnificent palaces, romantic boat rides, and rich Rajasthani heritage."
},

{
  id: 6,
  title: "Rishikesh",
  category: "Yoga | Adventure",
  rating: 4.7,
  date: "Apr 05-11",
  host: "superhost",
  price: 189,
  tag: "Adventure",
  image:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
  description:
    "Experience yoga by the Ganges, river rafting, spiritual retreats, and breathtaking Himalayan views."
},

{
  id: 7,
  title: "Kerala",
  category: "Nature | Backwaters",
  rating: 4.9,
  date: "May 18-24",
  host: "superhost",
  price: 329,
  tag: "Editor's Pick",
  image:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
  description:
    "Cruise through serene backwaters, explore lush greenery, and enjoy authentic South Indian culture."
},

{
  id: 8,
  title: "Leh Ladakh",
  category: "Mountains | Road Trips",
  rating: 5.0,
  date: "Jun 12-19",
  host: "superhost",
  price: 399,
  tag: "Must Visit",
  image:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
  description:
    "Ride through dramatic mountain passes, crystal-clear lakes, ancient monasteries, and stunning landscapes."
}
];
  return (
    <div className='prante w-full min-h-300 bg-black flex gap-5 flex-wrap p-8 '>
    
   {destinations.map((e) => (
  <Card title={e.title} cate={e.category} rate={e.rating} date={e.date}
  host={e.host} price={e.price} tag={e.tag} imges={e.image} description={e.description}/>
))}

      </div>
   
   
  )
}

export default App
