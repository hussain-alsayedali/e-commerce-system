import React from 'react';

interface props {
  /** The text to display inside the button */
  title: string;
  /** Optional button type, defaults to 'button' */
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<props> = ({ title, type = 'button' }) => {
  return (
    <button type={type} className="bg-purple-800 text-white rounded-lg w-full py-2 px-2 hover:opacity-50">
      {title}
    </button>
  );
};

export default Button;
