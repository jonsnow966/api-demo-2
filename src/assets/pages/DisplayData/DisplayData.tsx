import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { useNavigate } from "react-router-dom";

import getAPI from "../../api/getAPI";
import deleteAPI from "../../api/deleteAPI";
import Button from "../../components/Button/Button";

interface User{
  id: number;
  name: string;
  age: number;
}

function DisplayData(){
  const {dark} = useTheme();

  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(()=>{
      getAPI()
      .then((users: User[])=> setData(users))
      .catch((err) => setError({err}+"Failed to load users"));
  }, [data]);

  const handleClick = (user : User) =>{
    navigate('/update', {state : user})
  }

  const handleDelete = (id:number)=> async()=>{
    if(!id) return;

    await deleteAPI(id);
    alert("User Deleted");
  }

  return (
    <div className="w-full h-fit
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    justify-center items-center p-4">
      {data ? data.map(
        (e) =>
        <div className="w-70 h-fit
        flex flex-col justify-start items-start gap-2
        rounded-[5px]
        pl-4 py-5 mx-auto mt-5"
        key={e.id}
        style={{
                background: dark 
                ? 'var(--color-card-dark)'
                : 'var(--color-card-light)',
                color: dark 
                ? 'var(--color-text-primary-dark)'
                : 'var(--color-text-primary-light)'
          }}>
            <p className="text-2xl"><span className="font-bold">Name:</span> {e.name}</p>
            <p className="text-2xl"><span className="font-bold">Age:</span> {e.age}</p>

            <div className="w-full
            flex justify-start gap-2
            mt-2">
                <Button btnName='Update' width="1/2" type="button" onClick={()=>handleClick(e)}/>
                <Button btnName='Delete' width="" type="button" onClick={handleDelete(e.id)}/>
            </div>
        </div>

        

      ):
      <p>{error}</p>}
    </div>
  )
}

export default DisplayData
