import Banner from "../Bannar/Banner";
import ChooseUs from "../ChooseUS/ChooseUs";
import ClientSlider from "../ClinetSlide/ClientSlider";
import Merchant from "../Marchant/Merchant";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientSlider></ClientSlider>
            <ChooseUs></ChooseUs>
            <Merchant></Merchant>
            <h1 className="text-red-400">This is Home</h1>
        </div>
    );
};

export default Home;