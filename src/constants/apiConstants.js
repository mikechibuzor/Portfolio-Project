/* eslint-disable*/

import userService from "../services/userService";

//I had to do this injection here because, The userService imported here was not resolved
// As first reAD.It was lazily resolved so gave me undefined
//Don't know why sha but I blame webpack
export let api_headers = () => {
  return [
  {
    key: "Authorization",
    value: "Bearer " + userService.AuthToken()
  },
  {
    key: "Accept",
    value: "application/json"
  },
  {
    key: "Content-Type",
    value: "application/json"
  }
]};



// api local endpoint ... we have this declared but not assigned a value becauuse there is not api endpoint yet.
let localURL ;


//api prod endpoint
let prodUrl;
