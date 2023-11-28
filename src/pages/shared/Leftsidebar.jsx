import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold mb-5 text-center bg-slate-200 p-3">All categories</h1>
            {
                categories.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block text-xl my-3 ml-4 font-medium text-slate-500"
                    key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default Leftsidebar;