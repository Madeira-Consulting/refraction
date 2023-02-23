import { request } from "http";
import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    var code = req.query.code || null;
    var state = req.query.state || null;
    var redirect_uri = 'http://localhost:3000/api/callback';
    var querystring = require('querystring');

    if (state === null) {
        res.redirect('http://localhost:3000' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {

        try {
            const data = new URLSearchParams();
            data.append('code', code!.toString());
            data.append('redirect_uri', redirect_uri);
            data.append('grant_type', 'authorization_code');

            const response = await fetch(`https://accounts.spotify.com/api/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${Buffer.from(`${process.env.client_id}:${process.env.client_secret}`).toString("base64")}`
                },
                body: data.toString()
            });
            const newData = await response.json();
            var access_token = newData.access_token;
            var refresh_token = newData.refresh_token;

            
            console.log(newData);
        } catch (error) {
            console.log(error);
        }

        res.redirect('/#' + querystring.stringify({access_token: access_token, refresh_token: refresh_token}));
    }
}