import PropTypes from "prop-types";
import { FaEye, FaThumbsUp, FaDownload } from "react-icons/fa";
import { HiTag } from "react-icons/hi";

const Card = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="bg-[#00303f] text-white rounded-lg overflow-hidden shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto my-6">
      {" "}
      {/* Increased margin */}
      <div className="relative">
        <img
          src={image.webformatURL}
          alt="Gallery Item"
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:brightness-90"
        />
      </div>
      <div className="p-5 ">
        {" "}
        {/* Increased padding */}
        <h2 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">
          {" "}
          {/* Increased margin-bottom and padding */}
          Photo by: {image.user}
        </h2>
        <div className="flex flex-col gap-4 mb-5 text-sm">
          {" "}
          {/* Increased gap and margin-bottom */}
          <div className="flex items-center bg-gray-600 px-4 py-2 rounded-full shadow-md">
            <FaEye className="text-blue-300 mr-2" /> {image.views}
          </div>
          <div className="flex items-center bg-gray-600 px-4 py-2 rounded-full shadow-md">
            <FaThumbsUp className="text-green-300 mr-2" /> {image.likes}
          </div>
          <div className="flex items-center bg-gray-600 px-4 py-2 rounded-full shadow-md">
            <FaDownload className="text-yellow-300 mr-2" />
            <span>
              <strong>Downloads:</strong> {image.downloads}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          {" "}
          {/* Increased gap */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white rounded-full py-1 px-3 text-xs font-medium shadow-md flex items-center"
            >
              <HiTag className="text-blue-400 mr-1" />#{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
