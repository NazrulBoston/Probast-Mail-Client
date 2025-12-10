import img from '../../../assets/choose us/bookingIcon.png';
import img2 from '../../../assets/choose us/live-tracking.png';
import img3 from '../../../assets/choose us/safe-delivery.png';

const ChooseUs = () => {
    return (
        <div className="flex flex-col gap-4 w-full mt-24 ">
            <h1 className='text-3xl text-center font-bold mb-4'>Why Choose Us</h1>

            {/* ---------- Card 1: Live Portal Tracking ---------- */}
            <div className="card bg-base-100 shadow-md w-full flex flex-col md:flex-row items-center md:items-start p-4">
                {/* ✅ Added responsive width & height control */}
                <figure className="w-full md:w-40 flex justify-center">
                    <img
                        src={img}
                        alt="Live Portal Tracking"
                        className="rounded-lg object-contain w-24 h-24 md:w-32 md:h-32" // ✅ Added new responsive size
                    />
                </figure>

                <div className="divider md:divider-horizontal my-2 md:mx-4"></div>

                <div className="card-body flex-1 text-center md:text-left">
                    <h2 className="card-title">Live Portal Tracking</h2>
                    <p>
                        Track your shipment in real time through our live online portal.
                        Get instant updates on location, estimated delivery, and proof of
                        delivery right from your dashboard.
                    </p>
                </div>
            </div>

            {/* ---------- Card 2: 100% Safe Delivery ---------- */}
            <div className="card bg-base-100 shadow-md w-full flex flex-col md:flex-row items-center md:items-start p-4">
                {/* ✅ Same fix applied here */}
                <figure className="w-full md:w-40 flex justify-center">
                    <img
                        src={img3}
                        alt="100% Safe Delivery"
                        className="rounded-lg object-contain w-24 h-24 md:w-32 md:h-32" // ✅ Added responsive size
                    />
                </figure>

                <div className="divider md:divider-horizontal my-2 md:mx-4"></div>

                <div className="card-body flex-1 text-center md:text-left">
                    <h2 className="card-title">100% Safe Delivery</h2>
                    <p>
                        Your packages are handled with the utmost care from pickup to
                        drop-off. We use secure packaging, real-time tracking, and verified
                        delivery protocols to ensure every order arrives safely.
                    </p>
                </div>
            </div>

            {/* ---------- Card 3: 24/7 Call Center Support ---------- */}
            <div className="card bg-base-100 shadow-md w-full flex flex-col md:flex-row items-center md:items-start p-4">
                {/* ✅ Same fix applied here */}
                <figure className="w-full md:w-40 flex justify-center">
                    <img
                        src={img2}
                        alt="24/7 Call Center Support"
                        className="rounded-lg object-contain w-24 h-24 md:w-32 md:h-32" // ✅ Added responsive size
                    />
                </figure>

                <div className="divider md:divider-horizontal my-2 md:mx-4"></div>

                <div className="card-body flex-1 text-center md:text-left">
                    <h2 className="card-title">24/7 Call Center Support</h2>
                    <p>
                        Need help anytime? Our dedicated customer support team is available
                        24/7 to assist with delivery questions, rescheduling, or tracking
                        issues — always just a call away.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
