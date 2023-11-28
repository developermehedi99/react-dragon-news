import moment from "moment/moment";
import Breaking from "../Home/Breaking";

const Header = () => {
    return (
        <div className="text-center">
            <h2 className="text-6xl font-normal">The Dragon News</h2>
            <h3 className="text-lg font-normal my-4">Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <Breaking></Breaking>
        </div>
    );
};

export default Header;