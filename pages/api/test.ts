import { NextApiRequest, NextApiResponse } from "next";

var redirect_uri = 'http://localhost:3000/api/callback';
var querystring = require('querystring');
require("dotenv").config();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    var scope = 'user-read-private user-read-email';
    var state = generateRandomString(16);


    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
}

var generateRandomString = function (length: any) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};