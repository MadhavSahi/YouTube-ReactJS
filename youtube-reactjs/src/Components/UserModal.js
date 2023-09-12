import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed text-black top-5 right-[20%] z-10 w-20 h-30">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 shadow-blue-700"></div>
      <div className="fixed bg-white p-4 rounded-lg shadow-black border-2 border-black">
        {/* Add your modal content here */}
        <h2 className="text-2xl font-bold mb-2">Madhav Sahi's Details</h2>
        {/* <p>Username: John Doe</p> */}
        <div className="flex flex-col gap-2 mt-5">
          <p><a href="mailto:madhavsahi16@gmail.com">Email: madhavsahi16@gmail.com</a></p>
          <p>
            <a
              href="https://github.com/MadhavSahi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Madhav Sahi
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/madhav-sahi-6a2305161/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn: Madhav Sahi
            </a>{" "}
          </p>
        </div>
        {/* Close button */}
        <div className="text-center items-center">
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl mt-5 hover:scale-110"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
