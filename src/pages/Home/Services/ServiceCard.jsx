

const ServiceCard = ({service}) => {
    const{icon: Icon, title, text} = service
  return (
 <div 
      className="card bg-base-100 shadow-xl transition duration-300 group 
      hover:bg-[#97b04d] hover:shadow-2xl"  // 👉 background changes here
    >
      <div className="card-body items-center text-center">
        <div className="text-5xl text-primary mb-4 group-hover:text-white"> 
          {/* 👉 icon changes to white on hover */}
          <Icon />
        </div>
        <h2 className="card-title group-hover:text-white"> {/* 👉 title changes */}
          {title}
        </h2>
        <p className="text-sm text-gray-500 group-hover:text-white"> {/* 👉 text changes */}
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
