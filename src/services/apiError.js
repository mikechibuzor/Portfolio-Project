/* eslint-disable*/
import utils from "../utilClasses/utils";
import * as notify from "../utilClasses/notification";

/*
 * This helps me convert client and server erros into readable formats
 *
 */
export class apiError {
  constructor(api) {
    this.api = api;
  }
  responseError(error) {
    // console.log(error.toString());
    // console.log(error,"response error", error.response);
    var errorStr = "",message = {},stri = "";
    errorStr = (error.toJSON && error.toJSON().message) || error.toString();
    // console.log(error.toJSON().message,error.toString());
   
    stri =" An unrecognized error occured from the server, check if you have an internet connection or server is up, or contact admin";
  

     var errorMsg = errorStr ? errorStr : stri;

    //If this error is from my API, then it will have this format
    if (error.response && error.response.data) {
      errorMsg = error.response.data.message;
      //If the users authentication is expired, take log them out
      //message = 'Unauthenticated.'  : when user token is expired
      // if (errorMsg === "Unauthenticated." || errorMsg  === "The MAC is invalid.") {
      //   (new userService()).logoutUser();
      // }

  
      // if (errorMsg === "User has been disabled. Please contact adminstrator" || errorMsg  === "The MAC is invalid.") {
      //   (new userService()).logoutUser();
      // }
    }

    notify.error(errorMsg, "Error occured");
  }
  requestError(error) {
    // console.log(error, "request_error");
    notify.error("There was a request error, check console", "Error occured");
  }
}
