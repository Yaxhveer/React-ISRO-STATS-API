import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getAllFavLaunches, getAllLaunches } from "../services/services";

const Context = createContext();

export function useLaunchData() {
    return useContext(Context);
}

export function Provider({ children }) {
    const [allLaunches, setAllLaunches] = useState([]);
    const [favLaunches, setFavLaunches] = useState();
    const [favLaunchesUUID, setFavLaunchesUUID] = useState();
    const [error, setError] = useState("");

    const value = { allLaunches, setAllLaunches, favLaunches, setFavLaunches, favLaunchesUUID, setFavLaunchesUUID, error, setError };

    const fetchData = async () => {
        try {
            const allLaunchesData = await getAllLaunches();
            setAllLaunches(allLaunchesData);

            const favAllLaunchesData = await getAllFavLaunches();
            if (!favAllLaunchesData.done) {
                throw new Error(favAllLaunchesData.error)
            }
            setFavLaunches(favAllLaunchesData.launches);


            const temp = favAllLaunchesData.launches.map((launch) => {
                return launch.UUID;
            })
            setFavLaunchesUUID(temp);

        } catch (err) {
            console.log("Error: ", err.message);
            setError(err.message);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}