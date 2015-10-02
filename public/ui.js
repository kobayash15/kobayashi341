/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */

var toggle = function() {
	
	var el = document.getElementById('about');
	addClass(el,'show');
    console.log('About!');

};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
    
    //grab the 'submit' button element, identified by the 'submit-btn' id.
	button = document.getElementById('submit-btn');
	
	//From this point forward, when the button in clicked, the fetch function
	//shall be invoked
	button.onclick = fetch;

};

var fetch = function(){
	var text = document.getElementById('year');
	var year = text.textContent;
	console.log(year);
	vizController(year);
	
};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();