import Banner from "../Bannar/Banner";
import ClientSlider from "../ClinetSlide/ClientSlider";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientSlider></ClientSlider>
            <h1 className="text-red-400">This is Home</h1>
        </div>
    );
};

export default Home;