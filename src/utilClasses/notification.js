import { Toast } from "toaster-js"; 
import "toaster-js/default.scss";






export default function report (content,type){

switch (type) {
  case 'success':
    return new Toast(content , Toast.TYPE_DONE , Toast.TIME_NORMAL)
    break;
  case 'warning':
    return new Toast(content , Toast.TYPE_WARNING , Toast.TIME_NORMAL)
    break;
  case 'error':
    return new Toast(content , Toast.TYPE_ERROR , Toast.TIME_NORMAL)
   break;
  default:
    return new Toast(content , Toast.TYPE_INFO , Toast.TIME_NORMAL)
}

}

export function warning(text,title) {
	return report(text,'warning');
}

export function success(text,title) {
	return report(text,'success');
}
export function error(text,title) {
	return report(text,'error');
}