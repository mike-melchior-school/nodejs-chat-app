const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // return res.json({user: username, secret: "peepeepoopoo"})

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username},
            { headers: {"private-key": "fc80484f-3d56-4a06-9a40-68ab598b76ba"}}
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.log(e)
        return res.status(e.response.status).json(e.response.data);
    } 

});


app.listen(3001);