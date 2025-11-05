const postAPI = async (user: {name: string, age: number}) =>{
    const res = await fetch("https://fake-data-server-1-production.up.railway.app/users",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    });

    if (!res.ok) throw new Error("Network error");
    return res.json();
}

export default postAPI;
