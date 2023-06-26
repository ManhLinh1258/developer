import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {

}
export default function Input({className: cn, ...rest}: InputProps) {
    return <input className={`bg-gray-500 text-white p-2 flex-auto rounded-md w-full my-4 mr-3 ${cn}`} {...rest} />
}