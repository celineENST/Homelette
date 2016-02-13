$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	// Testing guests number
	model.setNumberOfGuests(3);
	console.log(model.getNumberOfGuests());
	
	// Testing adding dish
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);
	model.addDishToMenu(200);
	model.addDishToMenu(202);
		
	// Testing visualizing selected dish
	console.log(model.getSelectedDish('starter'));
	console.log(model.getSelectedDish('main dish'));
	console.log(model.getSelectedDish('dessert'));
	
	// Testing the visualization of full menu
	console.log(model.getFullMenu());
	
	// Testing the removal
	model.removeDishFromMenu(200);
	console.log(model.getFullMenu());
	
	// Testing the get all ingredients
	console.log(model.getAllIngredients());
	
	// Testing the get menu price
	console.log(model.getTotalMenuPrice());

});