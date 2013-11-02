// Jav$(document).ready(function() {
    // site code
//$(document).ready(function() {
    
$('#main').on('pageinit', function(){
    
    $('#submit').on('click',function(){
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        
        $('#main').append('<p>' + firstName + ' ' + lastName + '</p>'); 
		
		 $('#index_demo_Gold.html').on('pageinit', function(){
	
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
			console.log(" Line 15 store data right after this storeData line is run");
		}
	});
	
	//any other code needed for addItem page goes here
	
});
 
 
 
 $(document).ready(function(){
	
	var rcform = $('#recordmakeCreature');
	
	rcform.validate( {
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = rcform.serializeArray();
			
			console.log("parse data right after this storeData line is run line 49");
			parseCreatureForm(data);
			console.log("store data this inside the document.ready function line 51");
			storeData(data);
			}
		});
	
});
 var parseCreatureForm = function(key){
	// uses form data here;
	console.log(key);
	};

        
        
        
        
        
        
        
    

    // site code
    
    
console.log("The Dom has started to process information inside");
    
    
});    

console.log("The Dom has started to process information outside");
    
    
    
    
});

console.log("Working outside");






