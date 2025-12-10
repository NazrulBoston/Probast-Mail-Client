import { Link } from "react-router";
import logoImg from "../../../../../assets/logo.png"
const ProFastLogo = () => {
    return (
        <Link to='/'>
            <div className="flex">
                <img src={logoImg} alt="" />
                <p className="text-4xl mt-5">Profast</p>
            </div>
        </Link>
    );
};

export default ProFastLogo;