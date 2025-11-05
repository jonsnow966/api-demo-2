import { useTheme } from "../../hooks/useTheme/useTheme";

interface HeaderButtonProps {
    btnName: string;
    onClick?: () => void;
}


function HeaderButtons({btnName, onClick}: HeaderButtonProps){

    const {dark} = useTheme();

    return (
        <button className="w-fit h-fit
        flex justify-center items-center
        p-3
        rounded-md
        font-bold text-xl
        cursor-pointer hover:opacity-50"

        style={{
            background: dark 
            ? 'var(--color-btn-dark)'
            : 'var(--color-btn-light)',
            color: dark 
            ? 'var(--color-text-primary-dark)'
            : 'var(--color-text-primary-light)'
        }}

        onClick={onClick}>
        {btnName}
        </button>
    )
}

export default HeaderButtons
