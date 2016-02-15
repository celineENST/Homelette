//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 this.entryName=container.find("#entryName");
 this.entryPrice=container.find("#entryPrice");
 this.dishName=container.find("#dishName");
 this.dishPrice=container.find("#dishPrice");
 this.dessertName=container.find("#dessertName");
 this.dessertPrice=container.find("#dessertPrice");
 
 this.totalPrice=container.find("#totalPrice");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 
 this.entryName.html(model.getSelectedDish("starter").name);
 this.entryPrice.html(model.dishPrice(model.getSelectedDish("starter")));
 
 this.dishName.html(model.getSelectedDish("main dish").name);
 this.dishPrice.html(model.dishPrice(model.getSelectedDish("main dish")));
 
 this.dessertName.html(model.getSelectedDish("dessert").name);
 this.dessertPrice.html(model.dishPrice(model.getSelectedDish("dessert")));
 
 this.totalPrice.html(model.getTotalMenuPrice());
 
}