import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ anews }) => {
    const { title,image_url, details, _id } = anews;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <img src={image_url} alt="" />
                    {
                        details.length > 200 ? 
                        <p>{details.slice(0,200)}<Link
                        to={`/news/${_id}`}
                        className="text-red-600 font-bold ml-1">Read more...</Link> </p>
                        : <p>{details}</p>
                    }

                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    anews: PropTypes.object,
    title: PropTypes.object,
    thumbnail_url: PropTypes.object
}

export default NewsCard;