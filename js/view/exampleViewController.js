// ExampleViewController Object constructor
var ExampleViewController = function (view, model) {
	view.plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(view.dish1);
	});

	view.minusButton.click(function() {
		if(model.getNumberOfGuests() > 0 ){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});

	view.createButton.click(function() {
		view.view1.attr("style","display:none;");
		view.container23456.attr("style","display:true;");
		view.view2.attr("style","display:true;");
		view.view3.attr("style","display:true;");
	});

	view.confirm.click(function() {
		view.view2.attr("style","display:none;");
		view.view3.attr("style","display:none;");
		view.view4.attr("style","display:none");
		view.view5.attr("style","display:true;");
	});

	view.print.click(function() {
		view.view5.attr("style","display:none;");
		view.view6.attr("style","display:true;");
	});

	view.goBackEdit5.click(function() {
		view.view5.attr("style","display:none;");
		view.view2.attr("style","display:true;");
		view.view3.attr("style","display:true;");
	});

	view.goBackEdit6.click(function() {
		view.view6.attr("style","display:none;");
		view.view2.attr("style","display:true;");
		view.view3.attr("style","display:true;");
	});
	
	view.goBackSelect.click(function() {
		view.view4.attr("style","display:none;");
		view.view3.attr("style","display:true;");
	})
	
	view.confirmDish.click(function() {
		view.view4.attr("style","display:none;");
		view.view3.attr("style","display:true;");
		model.addDishToMenu(model.getSelectedDish().id);
	})
	view.dropDownMenu.on('click', 'li a', function(){
		switch (this.id){
			case("allDishes"):
				model.setSelectionType(0);
				break;
			case("starter"):
				model.setSelectionType(1);
				break;
			case("dish"):
				model.setSelectionType(2);
				break;
			case("dessert"):
				model.setSelectionType(3);
				break;
		}
  			
	});
		
	var fromThreeToFour = function(event) {
		view.view3.attr("style","display:none;");
		switch(event.data.id) {
		case 1:
			model.setSelectedDish(1);
			break;			
		case 2:
			model.setSelectedDish(2);
			break;
		case 3:
			model.setSelectedDish(3);
			break;
		case 100:
			model.setSelectedDish(100);
			break;
		case 101:
			model.setSelectedDish(101);
			break;
		case 102:
			model.setSelectedDish(102);
			break;
		case 103:
			model.setSelectedDish(103);
			break;
		case 200:
			model.setSelectedDish(200);
			break;
		case 201:
			model.setSelectedDish(201);
			break;
		case 202:
			model.setSelectedDish(202);
			break;
		}
		view.view4.attr("style","display:true;");
	};
	
	// Because the buttons are added dynamically, we need to use jQuery's "on" function rather than the usual "click" - so that the EWC knows how to handle them even if the buttons are not yet added. 
	
     $('body').on('click', '#dish1', {id:1},fromThreeToFour);
     $('body').on('click', '#dish2', {id:2},fromThreeToFour);
     $('body').on('click', '#dish3', {id:3},fromThreeToFour);
     $('body').on('click', '#dish100', {id:100},fromThreeToFour);
     $('body').on('click', '#dish101', {id:101},fromThreeToFour);
     $('body').on('click', '#dish102', {id:102},fromThreeToFour);
     $('body').on('click', '#dish102', {id:103},fromThreeToFour);
     $('body').on('click', '#dish200', {id:200},fromThreeToFour);
     $('body').on('click', '#dish201', {id:201},fromThreeToFour);
     $('body').on('click', '#dish202', {id:202},fromThreeToFour);
}

