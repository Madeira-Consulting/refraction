import { NextApiRequest, NextApiResponse } from 'next/types';
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090")
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const query = req.query;
  const {username, password} = query;
 
  if(username == undefined || password == undefined){
    res.status(405).send('Query is undefined!')
    return
  }
  
  console.log("query: User: " + username + ", pwd:" + password);

    const authData = await pb.collection('users').authWithPassword(username!.toString(), password!.toString());
    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model?.id);
    
    // "logout" the last authenticated model
    pb.authStore.clear();
      } 