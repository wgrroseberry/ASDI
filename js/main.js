<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>my new Mecai site testing commit</title>
    
    <!-- StyleSheets under here -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link href="http://code.jquery.com/mobile/1.0/jquery.mobile.structure-1.0.min.css" rel="stylesheet" type="text/css">
    
    <!-- JavaScript is normally at the end of the body, except for Modernizr which enables HTML5 elements & feature detects -->
	
<script src="http://code.jquery.com/jquery-1.6.4.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" />
    
    <script src="js/libs/modernizr.custom.min.js"></script>
</head>

<body>

        
<section data-role="page" id="home">
    	
        <div data-role="header">
           <h1> Mecai </h1>
          
           <p> Welcome to Create a Creature</p>
      </div>
       
        
            
            	<div data-role="content">
                
        	  		<form action="#" method="post" id="recordmakeCreature">
                    
                  
    <label for="firstName">FirstName:</label>
    <input id="firstName" name="firstName" type="text" placeholder="FirstName" required autofocus/>
    
    <label for="lastName">LastName:</label>
    <input id="lastName" name="lastName" type="text" placeholder="LastName" required />
    
    <label for="email">Email:</label>
    <input id="email" name="email" type="email" placeholder="hello@gmail.com" required />
    
    <label for="name"></label>
    Name of Creature:
    <input id="name" name="name" type="text" required/>
    
    <label for="date"></label>
   Birthday of Creature: <input id="date" name="date" type="date" required/>
   
   <div data-role="fieldcontain">
  <label for="textarea">Create A Creature Notes:</label>
  <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>

<!-- original submit button
<button id="submit">Submit</button>
-->
</div>
    
  
    
    <input type="submit" value="saveMyCreature" data-theme="b" />
    <input type="reset" value="reset" data-theme="a" data-inline="true" />
    
    
<a href="#creatureErrors" id="mycreatureErrorslink"  data-rel="dialog">Open Errors</a> 
</form>
              		
                    	
                      </div>
                      
                      <div data-role="dialog" id="creatureErrors">
        
        
         <div data-role="header" data-position="fixed">
             <h1>Required Fields</h1>
         </div>
        <div data-role="content">
        	 <ul>
        	 	<li>Test</li>
        	 	
        	 </ul>
            </div>
         </div>
         
                    
                    
           
       
                 
                   

                  
                    
       






             </section>
             
		
    <div id="main">
    	<h1>Display:</h1>
        </div>
    <div data-role="fieldcontain">
    	<input type="submit" value="SaveCreature" data-theme="b" />
        
        <input type="reset" value="Reset" data-theme="a" data-inline="true" />
        
        <input type="button" value="clearStorage" data-theme="b" data-inline="true" />
        		

		      </div>
             
              
                    <footer>
                   
                    	<nav>
                        	<ul>
                            	<li><a href="#" id="CreatureClear">Clear my Creatures</a></li>
                                <li><a href="#" id="Add-A-Creature">Add a Creature</a></li>
                                <li><a href="#" id="view">Display-A-Creature</a></li>
                                </ul>
                                </nav>
                                </footer>
                               
               
                       	
                       	
                    
              <!--     <a href="#creatureErrors" id="mycreatureErrorslink"  data-rel="dialog">Open Errors</a>       
             -->
          
                             
              <!-- JavaScript under here -->
           
           <!--   Not needed link does not work at the moment
            <link rel="stylesheet" href="/js/themes/greyblue.min.css" />
           -->
        <!-- <script type="text/jquery" src="js/libs/jquery-2.0.3.min.js"></script>
         
   
        
     -->
     <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
          <script type="text/javascript" src="js/libs/jquery.validate.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
   
        
        
       
 
 
 
 
 </body>

</html>                             


