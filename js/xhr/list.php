
//

$(function(){
    $('#languages').empty();
	$.ajax({
    	url:  'xhr/list.php',  
        type: 'GET',
        dataType: 'json',
        success: function (response){
           console.log(response.languages[0].name); 
           for(var i=0, j=response.languages.length; i<j; i++) {
               var lang = response.Ensign[i];
               $(' '+
               		'<div class="Ensign">'+
                       '<h2>'+ lang.name +'</h2>'+
                       '<p>'+ lang.description  +'</p>'+
                       '<p>'+ lang.version  +' </p>'+
                     '</div>'
                 ).appendTo('#Ensigns');
           };       
        }
      });
   });