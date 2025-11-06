import HeaderButtons from "../HeaderButtons/HeaderButtons"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme/useTheme";

function Header() {
    const {dark, setDark} = useTheme();
    const navigate = useNavigate();

    return (
        <div className="w-full h-full
        flex flex-col justify-center items-center gap-4"
        style={{
            background: dark 
            ? 'var(--color-header-dark)'
            : 'var(--color-header-light)', 
            color: dark 
            ? 'var(--color-text-primary-dark)'
            : 'var(--color-text-primary-light)'
        }}>
        
            <h1 className="text-2xl font-bold">
                API DEMO 2
            </h1>

            <div className="w-fit h-fit
            flex justify-center items-center gap-3">
                <HeaderButtons btnName='Register' onClick={()=>{navigate('/')}}/>
                <HeaderButtons btnName='View List' onClick={()=>{navigate('/list')}}/>
                <HeaderButtons btnName={dark?'Light':'Dark'} onClick={()=>setDark(!dark)}/>
            </div>
        </div>
    )
}

export default Header
