const putAPI = async (user: {id:number, name:string, age:number})=>{
    const res = await fetch(`https://fake-data-server-1-production.up.railway.app/users/${user.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({name:user.name, age:user.age})
    });

    return res.json();
}

export default putAPI;