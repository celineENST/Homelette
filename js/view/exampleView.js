//ExampleView Object constructor
<<<<<<< HEAD
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("4");
	
}
=======
var ExampleView = function (container,model) {
>>>>>>> 39087e9930b4cf77f46e943a71b9fa08398de0c9
 
// Get all the relevant elements of the view (ones that show data
// and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 this.dishCart = container.find("#dishCart");
 this.dishList = container.find("#dishList");
 
// Displaying

 // Number of guests
 this.numberOfGuests.html(model.getNumberOfGuests());
 
 // Table of dishes in view 2 (dish cart table)
 var tableau = "";
 model.getFullMenu().forEach(function(element,index,array) {
	 tableau += "<tr><td>" + element.name + "</td><td style=\"text-align: right;\">" + model.dishPrice(element) + " SEK</td></tr>";
 });
 
 tableau += "<tr id=\"totalPrice\"><td>Total Price: </td><td style=\"text-align: right;\">" + model.getTotalMenuPrice() + " SEK</td></tr>"
 this.dishCart.html(tableau);
 
 // Result of search for dishes in view 3
 var liste="";
 
 
 $.each(model.getAllDishes("starter"), function(index,element) {
 	liste += "<li><img src=\"images/" + element.image + "\"></img><span class='dishListName'>" + element.name + "</span><br /><span class='dishListDescription'>" 
	 + element.description + "</span></li>";
 });
 
 $.each(model.getAllDishes("main dish"), function(index,element) {
 	liste += "<li><img src=\"images/" + element.image + "\"></img><span class='dishListName'>" + element.name + "</span><br /><span class='dishListDescription'>" 
	 + element.description + "</span></li>";
 });
 
 $.each(model.getAllDishes("dessert"), function(index,element) {
 	liste += "<li><img src=\"images/" + element.image + "\"></img><span class='dishListName'>" + element.name + "</span><br /><span class='dishListDescription'>" 
	 + element.description + "</span></li>";
 });
 
 this.dishList.html(liste);
 
}