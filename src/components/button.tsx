import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text, className: cn, ...rest }) => {
  return (
    <button
      className={`bg-blue-500 text-white flex items-center gap-2 px-4 py-2 rounded-md ${cn}`}
      {...rest}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
