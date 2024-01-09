export const getAllLaunches = async () => {
    try {
        const res = await fetch(`https://services.isrostats.in/api/launches`, {
            method: "GET"
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

export const getAllFavLaunches = async () => {
    try {
        const res = await fetch(`/api/fav`, {
            method: "GET"
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

export const addFavLaunch = async (launchData) => {
    try {
        const res = await fetch(`/api/fav`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(launchData)
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

export const deleteFavLaunch = async (id) => {
    try {
        const res = await fetch(`/api/fav/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
}

