import { appPool as pool } from "../config/db.js";

export const addFavourite = async (req, res) => {

    const client = await pool.connect();

    try {
        const { UUID, Name, SerialNumber, LaunchDate, LaunchType, Payload, Link, MissionStatus } = req.body;

        if (!(UUID && Name && SerialNumber && LaunchDate && LaunchType && Link && MissionStatus)) {
            res.status(400).json({
                done: false,
                error: "All attributes required"
            })
            return
        }

        await client.query('BEGIN');
        await client.query('INSERT into fav_launches("UUID", "Name", "SerialNumber", "LaunchDate", "LaunchType", "Payload", "Link", "MissionStatus") values ($1, $2, $3, $4, $5, $6, $7, $8);', 
                            [UUID, Name, SerialNumber, LaunchDate, LaunchType, Payload, Link, MissionStatus]
                        );
        await client.query('COMMIT');
  
        res.json({
            done: true
        })
    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({
            done: false,
            error: err.message
        })
        await client.query('ROLLBACK');
    } finally {
        client.release();
    }
}

export const deleteFavourite = async (req, res) => {

    const client = await pool.connect();

    try {
        const uuid = req.params.id;

        await client.query('BEGIN');
        await client.query('DELETE from fav_launches where "UUID" = $1;', [uuid]);
        await client.query('COMMIT');
        
        res.json({
            done: true
        })
    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({
            done: false,
            error: err.message
        })
        await client.query('ROLLBACK');
    } finally {
        client.release();
    }
}

export const getAllFavourite = async (req, res) => {
    try {
        const arrayLaunch = await pool.query('SELECT * from fav_launches;');
        
        res.json({
            done: true,
            launches: arrayLaunch.rows
        })
    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({
            done: false,
            error: err.message
        })
    }
}
