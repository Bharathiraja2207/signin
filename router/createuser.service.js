import { client } from '../index.js';

export async function hashpass(email,firstname,lastname,username, hashpassword) {
  return await client
    .db("forgetpassword")
    .collection("forgetpassword")
    .insertOne({
      firstname:firstname,
      lastname:lastname,
      username: username,
      password: hashpassword ,
      email:email
    });
}

export async function getuserbyname(username, hashpassword) {
    return await client
      .db("forgetpassword")
      .collection("forgetpassword")
      .findOne({
        username: username
      });
  }

