/* eslint-disable*/

import utils from "./utils";
class localStorageUtil {
  //what should be sent to storage should be an object

  //The keyName is the name of the localstorage key
  static SetItems(object) {
    if (!utils.isObjectLike(object)) {
      throw new Error(
        "What you are adding to the local storage must be an Object"
      );
    }
    const keys = Object.keys(object);
    localStorageUtil.RemoveItems(keys);
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        localStorage.setItem(property, object[property]);
      }
    }
    return true;
  }
  static RemoveItems(Item) {
    if (utils.isStringLike(Item)) {
      localStorage.removeItem(Item);
      // console.log("is removeddff");
      return true;
    }
    Item.forEach(function(element) {
      localStorage.removeItem(element);
    });
    return true;
  }
  static Retrieve(Item) {
    return localStorage.getItem(Item);
  }
}
export default localStorageUtil;
