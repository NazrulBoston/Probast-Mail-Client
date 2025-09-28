
import { FaTruck, FaBoxOpen, FaRoute, FaShippingFast, FaWarehouse, FaHeadset } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    icon: FaTruck,
    title: "Express Delivery",
    text: "Our express delivery service is built for speed and reliability. We ensure that your packages are picked up and delivered on time, no matter the distance. With real-time tracking, you can follow your shipment every step of the way."
  },
  {
    icon: FaBoxOpen,
    title: "Parcel Handling",
    text: "We treat every package with care, from fragile items to bulk shipments. Our trained staff ensures secure packaging, safe storage, and smooth handling. You can trust us to deliver your parcels in perfect condition."
  },
  {
    icon: FaRoute,
    title: "Route Optimization",
    text: "Using advanced route planning technology, we minimize delays and maximize efficiency. Our optimized delivery paths reduce travel time and ensure faster service. This helps us provide both eco-friendly and cost-effective deliveries."
  },
  {
    icon: FaShippingFast,
    title: "Same-Day Shipping",
    text: "When time is critical, our same-day shipping service has you covered. We prioritize urgent orders and make sure they reach their destination within hours. It’s the perfect solution for businesses and individuals who need speed and reliability."
  },
  {
    icon: FaWarehouse,
    title: "Storage Solutions",
    text: "Our modern warehouses provide safe, flexible, and scalable storage for your goods. Whether you need short-term or long-term inventory management, we’ve got you covered. We help streamline your supply chain while keeping your products secure."
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    text: "Our friendly customer support team is available 24/7 to assist you. From tracking inquiries to delivery updates, we’re here to answer your questions quickly. Your peace of mind is our top priority, every step of the way."
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-500 mt-2">What we can do for your business</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard 
            key={index} 
            service = {service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
