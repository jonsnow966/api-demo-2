const deleteAPI = async (id:number) => {
    const res = await fetch(`https://fake-data-server-1-production.up.railway.app/users/${id}`,{
        method: "DELETE"
    });
    return res.json();
}

export default deleteAPI;
