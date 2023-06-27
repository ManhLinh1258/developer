import React, { HTMLAttributes, ChangeEvent } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function Input({
  className: cn,
  value,
  onChange,
  name,
  ...rest
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <input
      className={`bg-gray-500 text-white p-2 flex-auto rounded-md w-full my-4 mr-3 ${cn}`}
      value={value}
      name={name}
      onChange={handleChange}
      {...rest}
    />
  );
}
