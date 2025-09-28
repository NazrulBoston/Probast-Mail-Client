import { useRef } from "react";



const ClientSlider = () => {
     const logos = [
    "/public/logos/amazon.png",
    "/public/logos/casio.png",
    "/public/logos/moonstar.png",
    "/public/logos/amazon_vector.png",
    "/public/logos/start-people 1.png",
    "/public/logos/start.png",
    "/public/logos/randstad.png",
   
    
  ];
   const marqueeRef = useRef(null);

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Our Clients</h2>

        <div className="overflow-hidden">
          <marquee
            ref={marqueeRef}
            behavior="scroll"
            direction="left"
            scrollamount="10" // change this number for speed; higher = faster
            onMouseEnter={() => marqueeRef.current?.stop()} // pause on hover
            onMouseLeave={() => marqueeRef.current?.start()} // resume on leave
            aria-label="Client logos scrolling"
          >
            {/* duplicate logos to reduce visible gap between loops */}
            <div className="flex items-center gap-12">
              {logos.concat(logos).map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Client logo ${ (i % logos.length) + 1 }`}
                  className="h-8 w-auto object-contain inline-block mx-6"
                />
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
};


export default ClientSlider;