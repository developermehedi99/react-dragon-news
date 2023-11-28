import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import Rightsidebar from "../shared/Rightsidebar";
import Navbar from "../shared/Navbar";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>news details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <Rightsidebar></Rightsidebar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;