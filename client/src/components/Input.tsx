import { FC } from 'react';
import { faPhone, faUser, faHome, faCity, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input: FC = () => {
  return (
    <>
      <div className="mt-10">
        <p className="text-xl mb-5 font-semibold text-purple-900">Contact Information</p>
        <div className="grid mb-4 items-center">
          <div>
          <FontAwesomeIcon icon={faEnvelope} className="text-purple-900" />
          <label htmlFor="email" className="text-purple-900 ml-2">E-mail</label>
          </div>
          
          <input
            id="email"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your Email"
          />
        </div>

        <div className="grid mb-4 items-center">
        <div>
          <FontAwesomeIcon icon={faPhone} className="text-purple-900" />
          <label htmlFor="phone" className="text-purple-900 ml-2">Phone</label>
          </div>
          <input
            id="phone"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your Phone number"
          />
        </div>

        <p className="text-xl mb-5 mt-10 font-semibold text-purple-900">Shipping Address</p>

        <div className="grid mb-4 items-center">
        <div>
          <FontAwesomeIcon icon={faUser} className="text-purple-900" />
          <label htmlFor="name" className="text-purple-900 ml-2">Name</label>
          </div>
          <input
            id="name"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3 placeholder-black"
            placeholder="Hashem Almubarak"
          />
        </div>

        <div className="grid mb-4 items-center">
        <div>
          <FontAwesomeIcon icon={faHome} className="text-purple-900" />
          <label htmlFor="address" className="text-purple-900 ml-2">Address</label>
          </div>
          <input
            id="address"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your Address"
          />
        </div>

        <div className="grid mb-4 items-center">
        <div>
          <FontAwesomeIcon icon={faCity} className="text-purple-900" />
          <label htmlFor="city" className="text-purple-900 ml-2">City</label>
          </div>
          <input
            id="city"
            type="text"
            className="border border-purple-800 rounded-md w-80 h-10 pl-3"
            placeholder="Enter your City"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="saveInfo" />
          <label htmlFor="saveInfo">Save your information for your next shopping.</label>
        </div>

        <button className="bg-purple-900 mt-6 text-white py-1 px-5 text-lg rounded-lg">Continue</button>
      </div>
    </>
  );
}

export default Input;
