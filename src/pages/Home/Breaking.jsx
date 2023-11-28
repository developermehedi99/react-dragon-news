import Marquee from "react-fast-marquee";
const Breaking = () => {
    return (
        <div>
            <div className="flex my-8">
                <button className="btn btn-sm btn-info">Latest</button>
                <Marquee className="bg-slate-300">
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Breaking;