import image1 from "../../assets/Rectangle 3991 (1).png"
import image2 from "../../assets/Rectangle 3991 (2).png"
import image3 from "../../assets/Rectangle 3991.png"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Rightsidebar = () => {
    return (
        <div>
            <div className="p-4 ">
                <h2 className="font-bold text-xl mb-3">Login With</h2>
                <button className="btn btn-outline mb-2 w-full">
                    <FaGoogle></FaGoogle>
                    login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    login with github
                </button>
            </div>
            <div className="p-4  ">
                <h2 className="font-bold text-xl mb-3">Find Us On</h2>
                <a className="flex items-center border p-2" href=""><FaFacebook></FaFacebook><span className="ml-4">Facebook</span></a>
                <a className="flex items-center border p-2 my-3" href=""><FaTwitter></FaTwitter><span className="ml-4">Twitter</span></a>
                <a className="flex items-center border p-2" href=""><FaInstagram></FaInstagram><span className="ml-4">Instagram</span></a>
            </div>
            <div className="py-5">
                <h2 className="font-bold text-xl mb-3">Q Zone</h2>
                <div className="">
                    <img className=" mx-auto" src={image1} alt="" /> <p className="text-center">children</p>
                </div>
                <div className="my-3">
                    <img className=" mx-auto" src={image2} alt="" /> <p className="text-center">play</p>
                </div>
                <div>
                    <img className=" mx-auto" src={image3} alt="" /> <p className="text-center">close</p>
                </div>
            </div>
        </div>
    );
};

export default Rightsidebar;