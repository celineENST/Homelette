//ExampleView Object constructor
var ExampleView = function (container,model) {
 
// Get all the relevant elements of the view (ones that show data
// and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 this.dishCart = container.find("#dishCart");
 this.dishList = container.find("#dishList");
 this.dishSelected = container.find("#dishSelected");
 this.dishSelectedDescription = container.find("#dishSelectedDescription");
 this.dishSelectedIngredients = container.find("#dishSelectedIngredients");
 this.dishSelectedTotalCost = container.find("#dishSelectedTotalCost");
 this.dishSelectedImage = container.find("#dishSelectedImage");
 this.menuList = container.find("#menuList");
 this.menuTotalPrice = container.find("#menuTotalPrice");
 
// Displaying

 // Number of guests
 this.numberOfGuests.html(model.getNumberOfGuests());

 // Dish selected
 this.dishSelected.html(model.getSelectedDish('main dish').name); // Pas sûr
 this.dishSelectedDescription.html(model.getSelectedDish('main dish').description); // Pas sûr
 
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

 // Table of ingredients in view 4 (selected dish ingredients)
 var tableau2 = "";
 model.getSelectedDishIngredients().forEach(function(element,index,array) {
 	tableau2 += "<tr><td style=\"text-align: right;\">" + Math.round(element.quantity * model.getNumberOfGuests()) + element.unit +"</td><td style=\"text-align: left;\">" 
 	+ element.name + "</td><td style=\"text-align: left;\">" 
 	+ " SEK</td><td style=\"text-align: right;\">" 
 	+ element.price* model.getNumberOfGuests() +"</td></tr>";
 });
 
 tableau2 += "<tr id=\"totalPrice\"><td></td><td style=\"text-align: right;\">Total Price: </td><td>SEK </td><td style=\"text-align: right;\">" + model.dishPrice(model.getSelectedDish('main dish')) * model.getNumberOfGuests() + "</td></tr>"
 this.dishSelectedIngredients.html(tableau2);

 // View 4 Selected dish Image
 var im = "";
 im = "<img src=\"images/" + model.getSelectedDish('main dish').image + "\"></img>"; // Pas sûr 
 this.dishSelectedImage.html(im);

 //View 5
 var liste2 = "";
 var prix = 0;
 model.getFullMenu().forEach(function(element,index,array) {
 	liste2 += "<li><img src=\"images/" + element.image + "\"></img><span class='dishListName'>" + element.name + "</span><br />" 
 	+ model.dishPrice(element) + " SEK</li>";
 	prix +=model.dishPrice(element);
 });
 this.menuList.html(liste2);

 prix = prix * model.getNumberOfGuests();
 this.menuTotalPrice.html(prix);
}