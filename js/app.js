$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Testing guests number
	model.setNumberOfGuests(5);
		
	// Testing adding dish
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);
	model.addDishToMenu(200);
	model.addDishToMenu(202);

	//Testing selected dish
	model.getSelectedDish('main dish');
	
	// Testing the removal
	model.removeDishFromMenu(200);
	model.addDishToMenu(201);
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	

});