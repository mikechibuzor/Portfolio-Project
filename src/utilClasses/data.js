export default  class save {
	
save(data){
		var DataView = []
	  try{
			 DataView.push(data)
			 
	     return true;
	  }catch(error){
			return false
     }
		
	}
	
 save_contact(name , email , message){
	 var contact_list = []
	 var contact  = {
		 name:name,
		 email:email ,
		 message:message
	 }
	 
	 	try{
			 contact_list.push(contact)
			 return true

		 }catch(error){
			 return false
		 }
		 
		 
	 }
}
