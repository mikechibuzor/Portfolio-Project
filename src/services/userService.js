/* eslint-disable*/
import {
   api_headers
 } from "../constants/apiConstants";
 import EncryptDecrypt from "../utilClasses/EncryptDecrypt";
 import localStore from "../utilClasses/localStorageUtils";
 import store from "@/store/store";
 import { apiService } from "./apiService";
 import utils from "../utilClasses/utils";

 


 /**
  * Class helps perform any operation for the user(inclusive of client to server),
  * from login in to account creation and other manipulations of user
  * @class
  */
 export default class userService {
   /**
    * @constructor
    */
   constructor() {
     this.http = new apiService();
     this.encrypter = new EncryptDecrypt();
   }





 
   /**
    * @method
    * We Save the token gotten from login to local storage here, so we can use it for
    * request anytime we want And also save the the user id to local storage
    *
    */
   storeKey(tokens, user) {
     //I split this token into places, So I can save it in in small chunks Local storage
     let tokenSplit = utils.chunkString(tokens, 200);
     //From my test, this should be six
     let tokenCount = tokenSplit.length;
     //This token is now saved into several places in local storage
     for (var i = 0; i < tokenCount; ++i) {
       // code...
       let storeItem = {
         [userService.token_name + i]: this.encrypter.encrypt(tokenSplit[i])
       };
       localStore.SetItems(storeItem);
 
     }
     //  Store the count of the token counts
     localStore.SetItems({
       [userService.token_count]: tokenCount
     });
    
     // Save the Authenticated user ID to local storage
     localStore.SetItems({
       [userService.user_key]: user.id
     });
   }
 
 
   /**
     * @method
     * Runs on every route request to verify the users Authentication status
     *
     * gotten from https://router.vuejs.org/guide/advanced/meta.html
     *
     */
    async isUserLoggedIn(to, from, next) {
       if (to.matched.some(record => record.meta.requiresAuth)) {
         // console.log(userServe);
           this.validateActiveLogin(next)
         return;
       }
     }
 
 
   /**
    * @method
    * Everytime a request is made to the server api, we usually will need to use
    * A Bearer token, this function does the opposite of what storeKey()
    * function does, by descrypting and deserializing the keys, so it can make
    * sense to the api server
    */
   static AuthToken() {
     let token_count = localStore.Retrieve(userService.token_count);
     let encrypter = new EncryptDecrypt();
     // When each token member is fetched and decrypted, Then It will
     // Be concatenated here
     let tokenRebuild = "";
     for (let i = 0; i < token_count; ++i) {
       let encryptkey = localStore.Retrieve(userService.token_name + i);
       let realKey = encrypter.decrypt(encryptkey);
       tokenRebuild = tokenRebuild + realKey;
     }
     return tokenRebuild;
   }
 }
 
 //The name to be used to save all api tokens in local storage
 userService.token_name = "sys_tok_";
 //The name used to save the amount token splits in the local storage
 userService.token_count = "sys_tok_count";
 //The refresh token name used to save in localstorage
 userService.refresh_token_name = "sys_refre_";
 //The name used to save the number of refresh token splits in the local storage
 userService.refresh_token_count = "sys_refre_count";
 //The name used to save The user ID is in local storage
 userService.user_key = "key_fragment";
 
 //I save the last time all users list was fetched from db, so I can fethc it again
 //When it is passed five minutes
 userService.lastFetchUsersTime = null;