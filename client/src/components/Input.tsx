import { FC } from "react"; // Import the FC (Function Component) type from React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import {
  faPhone,
  faUser,
  faHome,
  faCity,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

// Define and export the Input functional component
const Input: FC = () => {
  return (
    <>
      <div className="mt-10">
        {/* Section Title */}
        <p className="text-xl mb-5 mt-10 font-semibold text-purple-900">
          Shipping Address
        </p>

        {/* Name Input Field */}
        <div className="grid mb-4 items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-purple-900" />
            <label htmlFor="name" className="text-purple-900 ml-2">
              Name
            </label>
          </div>
          <input
            id="name"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3 placeholder-black"
            placeholder="Hashem Almubarak"
          />
        </div>

        {/* Address Input Field */}
        <div className="grid mb-4 items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="text-purple-900" />
            <label htmlFor="address" className="text-purple-900 ml-2">
              Address
            </label>
          </div>
          <input
            id="address"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your Address"
          />
        </div>

        {/* City Input Field */}
        <div className="grid mb-4 items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCity} className="text-purple-900" />
            <label htmlFor="city" className="text-purple-900 ml-2">
              City
            </label>
          </div>
          <input
            id="city"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your City"
          />
        </div>

        {/* Save Information Checkbox */}
        <div className="flex items-center space-x-3">
          <input type="checkbox" id="saveInfo" className="h-4 w-4" />
          <label htmlFor="saveInfo" className="text-gray-700">
            Save your information for your next shopping.
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
