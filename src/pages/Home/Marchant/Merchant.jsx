import merchantPic from '../../../assets/merchant/location-merchant.png';
import merchantBG from '../../../assets/merchant/be-a-merchant-bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Merchant = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${merchantBG})` }}
      className="bg-top bg-no-repeat bg-[#9ab352] rounded-4xl py-12 px-6 lg:px-20 my-10"
      data-aos="flip-up"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 w-full">
        <img
          src={merchantPic}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover"
          alt="Merchant and Customer satisfaction"
        />
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Merchant and Customer satisfaction our first priority
          </h1>
          <p className="py-6 text-base md:text-lg leading-relaxed">
            This line means that both merchants and customers are at the heart of everything we do.
            We focus on providing reliable services, smooth transactions, and continuous support
            to ensure that sellers can grow their business confidently and buyers can shop
            with trust and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full mb-2 sm:mb-0 sm:mr-4">Become a Merchant</button>
            <button className="btn btn-primary rounded-full btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
