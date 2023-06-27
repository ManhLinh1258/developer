import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  className: cn,
  ...rest
}) => {
  return (
    <button
      className={`bg-blue-500 text-white flex items-center gap-2 px-2 py-2 rounded-md ${cn}`}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {text && <span className="text-sm">{text}</span>}
    </button>
  );
};

export default Button;
