import { useTheme } from "../../hooks/useTheme/useTheme";

interface ButtonProps {
    btnName: string;
    width: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
}


function Button({btnName, width, type = 'button', onClick}: ButtonProps){
  const { dark } = useTheme();
  return (
    <button className={`w-${width} h-fit
    flex justify-center items-center
    p-3 
    rounded-md
    font-bold
    cursor-pointer hover:opacity-50
    `}
    type={type}

    style={{
      background: dark
        ? btnName === "Delete"
          ? "var(--color-btn-del-dark)"
          : "var(--color-btn-dark)"
        : btnName === "Delete"
        ? "var(--color-btn-del-light)"
        : "var(--color-btn-light)",

      color: dark
        ? "var(--color-text-primary-dark)"
        : "var(--color-text-primary-light)",
    }}

    onClick={onClick}>
       {btnName}
    </button>
  )
}

export default Button