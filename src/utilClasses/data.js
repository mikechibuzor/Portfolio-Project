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
}