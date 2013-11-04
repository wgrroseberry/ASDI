 
   $('#index.html').on('pageinit', function(){
	
	      console.log("Line 26 on pageinit funtion");

		var rcform = $('#recordmakeCreature');
		    myCreatureErrorLink = $('#mycreatureErrorslink')
		    rcform.validate({
			invalidHandler: function(form, validator) {
				myCreatureErrorLink.click();
			},
			submitHandler: function() {
		var data = rcform.serializeArray();
			storeData(key);
			console.log("pageinit function Line 15 store data right after this storeData line is run");
		}
	});
	console.log("inside the pageinit function");
	//any other code needed for addItem page goes here
	
});
  
  
  
  
  $(document).ready(function(){
	
	var rcform = $('#recordmakeCreature');
	
	rcform.validate( {
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = rcform.serializeArray();
			
			console.log(" Document.ready function parse data right after this storeData line is run line 49");
			parseCreatureForm(data);
			console.log("store data this inside the document.ready function line 51");
			storeData(data);
			}
		});
	

 var parseCreatureForm = function(key){
	// uses form data here;
	console.log(key);
	};

 
 
 
 
 
 
 
 
 
 function displayData() {
	 $('recordmakeCreature');
	 
	 $('#recordmakeCreature').html();
	 $('#myNewId').html('<p>Set this paragraph</p>');
	 

	 console.log("inside the displayData funtion on line 61");
 
	 
	 var name = window.localStorage['name'];
     var birthday = window.localStorage['birthday'];
     var gender = window.localStorage['gender'];
	 //Converting
	 //document.getElementById('name-div').innerText = name ;// convert to jquery
	 
	 // html form example <div id="name-div"></div>
	 
	 // You can do that by
	 // $('#myBtn').click(function(e){ // code goes here }); 
	 
	 $("#button_id").click(function() { 
alert(localStorage.getItem('local_key')); // #local_key i have at the time of storing data into local storage using localStorage.setItem

})
	 
	
	 
	 
	 
	 
	 
	 
	 }
	 console.log("The form tag is here on line 70");
	 console.log(recordmakeCreature);
	 
	 displayData();
 
 
 

 
 	
 

 
 
 
 
 


 
 
 
 
 
 
 
 






		


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(key){
	    
		if (!key) {
		// if there is no key, this mean this is a brand new item and requires a new key
		
		var id = Math.floor(Math.random()*1000000001);
		
		}else{
		// Set the id to the existing key we're editing so that it will save over the data
		// the key is the same key that's been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storedata function
		id = key;
		console.log("this is the key value on line 93 where is key is established key" + key);
		}  
		// Geting all the form field values
		// Object will contain a array and input values.
		
//		getCheckboxes();
		var item           = {};
	 	
        item.FirstName             =["FirstName", $('#FirstName').val()];
		item.LastName              =["LastName", $('#LastName').val()];
        item.email                 =["Email:", $('#Email').val()];
	    item.NameofCreature        =["Creature:", $('#CreatureName').val()];		
		item.Dates                 =["Date:", $('#Dates').val()];
		item.notes                 =["Notes:", $('#notes').val()];
	
	/*	item.gender                =["Gender:", genderValue];   future reference*/
		item.iq                    =["IQ", $('#iq').val()];
		console.log("right after the getCheckboxes Store Data funtion");
		console.log("the key = " + key);
	
		// Save information into local storage
		// Use stringify to convert our object to a string.
		
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		
		
		alert("Your faviate Creature is saved!");
	
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All the Creature favorates have been cleared");
			window.location.reload();
			return false;	
		}
	

};


});
