/* eslint-disable*/
import * as nprogress from "nprogress";
import { api_headers, baseurl } from "../constants/apiConstants";
import utils from "../utilClasses/utils";
import { apiError } from "./apiError";
import axios from "axios";
/*
 * This class helps me to connect to the server via xhr
 *
 */
export class apiService {
  constructor() {
    this._method = "POST";
    this._BaseUrl = baseurl;
    this._headers = [];
    this._getParams = [];
    //With this you can determine if this request is still going to the server and
    // Awaiting response or failure
    this._requestInprogress = false;
    this.request_id = utils.randomNumber();
    this.http = axios.create();

    //Let this application use Authorization headers on a steady
    this.useAuth = true;

    this.errorHandler = new apiError(this);

    //I did set the interceptors here once because the functions inside the interceptor does not
    //Need to run severally on every request, and since we don't know if the http client stacks the
    // Interceptor functions or replaces them all through.
    //So we need to be careful
    this.setInterceptors(); 
  }
  get requestInprogress() {
    return this._requestInprogress;
  }
  set requestInprogress(status) { 
    //If request started, show progress bar, else end it
    if (status) {
      nprogress.start();
      // code...
    } else {
      nprogress.done();
    }
    this._requestInprogress = status;
  }
  /*
   * An array Of headers is set here for requests
   *
   */
  setHeaders(headers) {
    for (const i in headers) {
      if (
        headers[i].hasOwnProperty("key") &&
        headers[i].hasOwnProperty("value")
      ) {
        let insert = [headers[i].key, headers[i].value];
        //    this.http.configure(client => {
        //   client.withHeader(headers[i].key, headers[i].value);
        // });
        this._headers.push(insert);
      }
    }
    return this;
  }
  /*
   * From here I set a single header needed for the request
   *
   */
  setHeader(header) {
    if (header.key && header.value) {
      let insert = [header.key, header.value];
      this._headers.push(insert);
    }
    return this;
  }
  /*
   * prepare a url string for get request
   * turns [{ mimi: "name"}, {oly: "sister"}] to mimi=name&oly=sister
   *
   */
  Geturl() {
    let concat = "";
    for (const i in this._getParams) {
      for (const key in this._getParams[i]) {
        // if not empty, then set amper sign behind sign behind
        if (concat) {
          concat = concat + "&";
        }
        concat = concat + key + "=" + this._getParams[i][key];
      }
    }
    return concat;
  }
  /*
   * From here I set get parameters for a request
   * Turns the following format and sends to array
   * { key: "name", value: "mimi"} = { name: "mimi"}
   *
   */
  setGetParams(params) {
    for (const i in params) {
      if (
        params[i].hasOwnProperty("key") &&
        params[i].hasOwnProperty("value")
      ) {
        let insert = {};
        insert[params[i].key] = params[i].value;
        this._getParams.push(insert);
      }
    }
    return this;
  }
  /**
   * Perform a get request, against an API
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */
  sendGet(url, parameters) {
    let urlAddon = "";
    if (parameters && utils.isArrayLike(parameters)) {
      urlAddon = this.setGetParams(parameters).Geturl();
    }
    //Set up this request
    this.boostrapRequest();
    url = urlAddon ? url + "?" + urlAddon : url;
    let request = this.http.get(url); 
    //Save the request
    this.saveRequest(request);
    //Run this request and return result
    return this.prepareResponse(request); 
  }

  /**
   * Perform a delete request, against an API. deletes a resource from server
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */
  sendDelete(url, parameters) {
    let urlAddon = "";
    if (parameters && utils.isArrayLike(parameters)) {
      urlAddon = this.setGetParams(parameters).Geturl();
    }
    //Set up this request
    this.boostrapRequest();
    url = urlAddon ? url + "?" + urlAddon : url;
    let request = this.http.delete(url);
    //Save the request
    this.saveRequest(request);
    //Run this request and return result
    return this.prepareResponse(request);
  }

  /**
   * Perform a POST request, against an API
   * @params url: string
   * @params parameters: inpType ;
   *  <inpType> The input type, the user is sending into the server as a request
   *  <respType> is the expected response type the api end point returns
   */
  sendPOST(url, parameters) {
    let data = parameters ? parameters : {};
    //Set up this request
    this.boostrapRequest();
    //Run the request
    let request = this.http.post(url, data);
    // request.catch(function(error){
    //     console.log(error,"catehc me")
    // });
    this.saveRequest(request);
    //Run this request and return result
    return this.prepareResponse(request);
  }
  /**
   * Perform a PUT request, against an API
   * @params url: string
   * @params parameters: inpType ;
   *  <inpType> The input type, the user is sending into the server as a request
   *  <respType> is the expected response type the api end point returns
   */
  sendPut(url, parameters) {
    let data = parameters ? parameters : {};
    //Set up this request
    this.boostrapRequest();
    //Run the request
    let request;
    if (data  && data instanceof FormData) {
      //I had to create this patch because laravel had issues 
      //with PUT requests carrying formdata 
      //https://laravel.com/docs/5.8/routing#form-method-spoofing
      data.append('_method', "put");
      request = this.http.post(url, data);
    }else{
      request = this.http.put(url, data);
    }

    this.saveRequest(request);
    //Run this request and return result
    return this.prepareResponse(request);
  }
  /**
   * Perform a PATCH request, against an API
   * @params url: string
   * @params parameters: inpType ;
   *  <inpType> The input type, the user is sending into the server as a request
   *  <respType> is the expected response type the api end point returns
   */
  sendPatch(url, parameters) {
    let data = parameters ? parameters : {};
    //Set up this request
    this.boostrapRequest();
    //Run the request
    let request;
    if (data  && data instanceof FormData) {
      //I had to create this patch because laravel had issues 
      //with PUT requests carrying formdata 
      //https://laravel.com/docs/5.8/routing#form-method-spoofing
      data.append('_method', "put");
      request = this.http.post(url, data);
    }else{
      request = this.http.patch(url, data);
    }
    
    this.saveRequest(request);
    //Run this request and return result
    return this.prepareResponse(request);
  }
  /*
   * This function makes sure that the result of what we got from the api is interpreted
   * In the format the api was written.
   * This function just returns the "data" element if it is a success or the "error" element
   * If it is a failure response.
   * REASON: No need to do that decoupling in the application layer. let this service do that
   */
  async prepareResponse(request) {
    //Set the get parameters to be empty after every request
    this._getParams = [];
    let result;
    let myError;
    //The type of response the user is expecting
    let jsonresponse;
    try {
      //The HttpResponseMessage result from the http client
      result = await request;

      jsonresponse = result.data.data;
      // console.log(result ,"success response");
    } catch (error) {
      // console.log(error.response,"apiservice error")

      var errorStr = (error.toJSON && error.toJSON().message) || "";
      myError = errorStr + ". An unrecognized error occured from the server, check if";
      myError = myError +" you have an internet connection or server is up, or contact admin";

      //If this error is from my API, then it will have this format
      if (error.response && error.response.data) {
        myError = error.response.data.message;
      }
    }
    let promise1 = new Promise(function(resolve, reject) {
      if (jsonresponse) {
        resolve(jsonresponse);
      } else {
        reject(myError);
      }
    });
    return promise1;
  }
  /*
   * This function simply makes sure that the request has a number and
   * can even be traced, and all can be cancelled
   *
   */
  saveRequest(request) {
    apiService.all_request_track_id = apiService.all_request_track_id++;
    apiService.allRequests[this.request_id] = request;
  }
  /*
   * This function sets some parameters right just before a request happens
   * Headers and some other properties are set here
   *
   */
  boostrapRequest() {
    this.setupHeaders(); 
    this.setupBaseUrl();
  }
  // .withParams({ abc: '123' })
  // withInterceptor
  get headers() {
    return this._headers;
  }
  resetHeaders() {
    this._headers = [];
  }
  noAuth() {
    this.useAuth = false;
    return this;
  }
  Auth() {
    this.useAuth = true;
    return this;
  }
  //The public api for setting base url
  setBaseUrl(url) {
    this._BaseUrl = url;
    return this;
  }
  // used to setup the required headers for a request
  setupHeaders() {
    //This here sets the Authorization: Bearer header and other constant headers needed by the
    // Application
    this.setHeaders(api_headers());
    for (const i in this._headers) {
      //If its a no auth request, then don't send authorization header
      if (this._headers[i][0] === "Authorization" && !this.useAuth) {
        continue;
      }
      this.http.defaults.headers.common[this._headers[i][0]] = this._headers[
        i
      ][1];
    }
  }
  setupBaseUrl() {
    this.http.defaults.baseURL = this._BaseUrl;
  }

  setInterceptors() {
    let $this = this;

    // Add a request interceptor
    this.http.interceptors.request.use(
      function(config) {
        // Do something before request is sent

        $this.requestInprogress = true;
        apiService.allRequests_status[$this.request_id] = true;
        return config;
      },
      function(error) {
        // Do something with request error

        $this.requestInprogress = false;
        apiService.allRequests_status[$this.request_id] = false;
        //This guy handles the Request errors and processes the error object
        //And flags an error toast if need be
        $this.errorHandler.requestError(error);

        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.http.interceptors.response.use(
      function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        $this.requestInprogress = false;
        apiService.allRequests_status[$this.request_id] = false;
        return response;
      },
      function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        $this.requestInprogress = false;
        apiService.allRequests_status[$this.request_id] = false;
        //This guy handles the response errors and processes the error object
        //And flags an error toast if need be
        $this.errorHandler.responseError(error);
        return Promise.reject(error);
      }
    );
  }
  /*
   *  This method cancels al active request
   */
  static abortAll() {
    for (var key in apiService.allRequests) {
      //if the request is still active, then cancel it
      if (apiService.allRequests_status[key]) {
        apiService.allRequests[key].abort();
      }
    }
  }
  setMethod(newMethod) {
    this._method = newMethod;
    return this;
  }
}
//This stores all request objects in an object using the request_id as key
apiService.allRequests = {};
//This stores the status of all  requests, either true(request still in progress)
// or false (request is done)
apiService.allRequests_status = {};
//The total number of all active requests
apiService.all_request_track_id = 0;
