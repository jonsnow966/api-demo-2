const getAPI = async () => {
    const res = await fetch("https://fake-data-server-1-production.up.railway.app/users",{
        method:"GET"
    });

    return res.json();
}

export default getAPI;