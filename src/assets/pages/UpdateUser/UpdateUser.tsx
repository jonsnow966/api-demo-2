import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme/useTheme";
import putAPI from "../../api/putAPI";
import numChecker from "../../functions/numChecker";
import Button from "../../components/Button/Button";

interface User{
  id: number,
  name: string;
  age: number;
}

function UpdateUser() {
  const { state } = useLocation();
  const user = state as User;

  const {dark} = useTheme();

  const navigate = useNavigate();

  const [name, setName] = useState<string | ''>(user.name);
  const[age_1, setAge] = useState(JSON.stringify(user.age));
  
  const handleUpdate = async () => {
    
    if(!user?.id){
      alert("User Not Found!!");
      return;
    }
    if(!name){
        return
    }   
    if(!age_1){
        return
    } 
        
    const age:number = Number(age_1);

    try {
      await putAPI({id:user.id, name:name, age:age});
      alert("User Updated");
      navigate('/list');
    } 
    catch (err) {
      console.error(err);
      alert("Failed to update");
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
          handleUpdate();
      }}>

        <h1 className="font-bold">Update Here</h1>
        <label className="w-[90%] flex flex-col">
            <input className="p-2 rounded-[5px] outline-0"
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
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
            <Button btnName='Update' width="50" type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser
