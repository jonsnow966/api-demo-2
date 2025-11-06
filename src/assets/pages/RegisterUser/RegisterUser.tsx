import { useState } from "react";
import Button from "../../components/Button/Button"
import { useTheme } from "../../hooks/useTheme/useTheme"
import postAPI from "../../api/postAPI"
import numChecker from "../../functions/numChecker";
import strChecker from "../../functions/strChecker";

function RegisterUser() {

    const [name, setName] = useState("");
    const[age_1, setAge] = useState("");
    const {dark} = useTheme();

    const handleSubmit = async () => {
        if(!name){
            alert("Name Field Empty");
            return
        }   
        if(!age_1){
            alert("Age Field Empty");
            return
        } 
            
        const age:number = Number(age_1);

        try {
            await postAPI({name, age});
            setName("");
            setAge("");
            alert("User Registered");
        } 
        catch (err) {
            console.error(err);
            alert("Failed to register");
        }
    }

    return (
        <div className="w-full h-full
        flex justify-center items-start
        pt-10">
            <form className="w-[90%] h-fit md:w-120
            flex flex-col justify-center items-center gap-10
            p-5 pb-10
            text-2xl
            rounded-[10px]"

            style={{
                background: dark 
                ? 'var(--color-card-dark)'
                : 'var(--color-card-light)',
                color: dark 
                ? 'var(--color-text-primary-dark)'
                : 'var(--color-text-primary-light)'
            }}
            
            onSubmit={(e) => {
                e.preventDefault(); // still prevent default
                handleSubmit();
            }}>

                <h1 className="font-bold">Register Here</h1>
                <label className="w-[90%] flex flex-col">
                    <input className="p-2 rounded-[5px] outline-0"
                    type="text"
                    value={name}
                    onChange={(e)=>{
                        const value:boolean = strChecker(e.target.value);
                        if(value === true)
                            setName(e.target.value)
                        else
                            alert("Enter Alphabets Only");
                    }}
                    placeholder="Enter Your Name"
                    style={{
                        background: dark 
                        ? 'var(--color-input-dark)'
                        : 'var(--color-input-light)',

                        color: dark 
                        ? 'var(--color-text-primary-dark)'
                        : 'var(--color-text-primary-light)',

                        '--placeholder-color': dark 
                        ? 'var(--color-placeholder-dark)'
                        : 'var(--color-placeholder-light)'
                    }as React.CSSProperties}/>
                </label>

                <label className="w-[90%] flex flex-col">
                    <input className="p-2 rounded-[5px] outline-0"
                    type="string"
                    value={age_1}
                    placeholder="Enter Your Age"
                    onChange={(e)=>{
                        const value:boolean = numChecker(e.target.value);
                        if(value === true)
                            setAge(e.target.value)
                        else
                            alert("Enter Number Only");
                    }}
                    style={{
                        background: dark 
                        ? 'var(--color-input-dark)'
                        : 'var(--color-input-light)',

                        color: dark 
                        ? 'var(--color-text-primary-dark)'
                        : 'var(--color-text-primary-light)',

                        '--placeholder-color': dark 
                        ? 'var(--color-placeholder-dark)'
                        : 'var(--color-placeholder-light)'
                    }as React.CSSProperties}/>
                </label>
                <div className="mt-5">
                    <Button btnName='Register' width="50" type="submit"/>
                </div>
            </form>
        
        </div>
    )
}

export default RegisterUser
