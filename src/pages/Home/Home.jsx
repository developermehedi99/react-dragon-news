import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import Leftsidebar from "../shared/Leftsidebar";
import Navbar from "../shared/Navbar";
import Rightsidebar from "../shared/Rightsidebar";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
                <div className="border">
                    <Leftsidebar></Leftsidebar>
                </div>
                <div className="border col-span-2">
                    <h2 className="text-4xl">news coming soon...</h2>
                    {
                        news.map(anews => <NewsCard
                        key={anews._id}
                        anews={anews}
                        ></NewsCard>)
                    }
                </div>
                <div className="border">
                    <Rightsidebar></Rightsidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;