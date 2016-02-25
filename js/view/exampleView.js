function isNumber(obj) { return !isNaN(parseFloat(obj)) }

//ExampleView Object constructor
var ExampleView = function (container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishCart = container.find("#dishCart");
	this.dishList = container.find("#dishList");
	this.dishSelected = container.find("#dishSelected");
	this.dishSelectedDescription = container.find("#dishSelectedDescription");
	this.dishSelectedIngredients = container.find("#dishSelectedIngredients");
	this.dishSelectedTotalCost = container.find("#dishSelectedTotalCost");
	this.dishSelectedImage = container.find("#dishSelectedImage");
	this.menuList = container.find("#menuList");
	this.menuTotalPrice = container.find("#menuTotalPrice");
	this.finalMenu = container.find("#finalMenu");
	//Buttons
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirm = container.find("#confirm");
	this.createButton = container.find("#createButton");
	this.print = container.find("#print");
	this.goBackEdit5 = container.find("#goBackEdit5");
	this.goBackEdit6 = container.find("#goBackEdit6");

	// Getting the views divs
	this.view1 = container.find("#view1");
	this.container23456 = container.find("#container23456");
	this.view2 = container.find("#view2");
	this.view3 = container.find("#view3");
	this.view4 = container.find("#view4");
	this.view5 = container.find("#view5");
	this.view6 = container.find("#view6");

	this.numberOfGuests.html(model.getNumberOfGuests());
	// Displaying

	// View 2
	this.updateView2 = function(args) {

		// View 2
		// Number of guests
		$(numberOfGuests).html(model.getNumberOfGuests());

		// Table of dishes in view 2 (dish cart table)
		var tableau = "";
		model.getFullMenu().forEach(function(element,index,array) {
		 tableau += "<tr><td>" + element.name + "</td><td style=\"text-align: right;\">" + model.dishPrice(element) + " SEK</td></tr>";
		});

		tableau += "<tr id=\"totalPrice\"><td>Total Price: </td><td style=\"text-align: right;\">" + model.getTotalMenuPrice() + " SEK</td></tr>"
		$(dishCart).html(tableau);
	}

	
	this.updateView3 = function(args) {
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

		$(dishList).html(liste);
	}

	this.updateView4 = function(args) {
		// Dish selected
		$(dishSelected).html(model.getSelectedDish('main dish').name); 
		$(dishSelectedDescription).html(model.getSelectedDish('main dish').description);

		// Number of guests
		$(numberOfGuests).html(model.getNumberOfGuests());

		// Table of ingredients in view 4 (selected dish ingredients)
		var tableau2 = "";
		model.getSelectedDishIngredients().forEach(function(element,index,array) {
		tableau2 += "<tr><td style=\"text-align: right;\">" + Math.round(element.quantity * model.getNumberOfGuests()) + element.unit +"</td><td style=\"text-align: left;\">" 
		+ element.name + "</td><td style=\"text-align: left;\">" 
		+ " SEK</td><td style=\"text-align: right;\">" 
		+ element.price* model.getNumberOfGuests() +"</td></tr>";
		});

		tableau2 += "<tr id=\"totalPrice\"><td></td><td style=\"text-align: right;\">Total Price: </td><td>SEK </td><td style=\"text-align: right;\">" + model.dishPrice(model.getSelectedDish('main dish')) * model.getNumberOfGuests() + "</td></tr>"
		$(dishSelectedIngredients).html(tableau2);

		// View 4 Selected dish Image
		var im = "";
		im = "<img src=\"images/" + model.getSelectedDish('main dish').image + "\"></img>"; // Pas sûr 
		$(dishSelectedImage).html(im);
	}

	this.updateView5 = function(args) {
		// Number of guests
		$(numberOfGuests).html(model.getNumberOfGuests());

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
		$(menuTotalPrice).html(prix);
	}

	this.updateView6 = function(args) {

		// Number of guests
		$(numberOfGuests).html(model.getNumberOfGuests());

		//View 6
		var liste3 = "";
		model.getFullMenu().forEach(function(element,index,array) {
		liste3 += "<div class=\"col-md-2\" style=\"margin-left:100px;\"><img src=\"images/" + element.image + "\"></img></div>"
					+ "<div class=\"col-md-3\"><h2>" + element.name + "</h2><br /> Dish description" + "</div>"
					+ "<div class=\"col-md-5\" style=\"margin-bottom:50px;\"><h3>Preparation</h3><br />" + element.description + "</div>";
		});

		$(finalMenu).html(liste3);
	}

	model.addObserver(this.updateView2);
	model.addObserver(this.updateView3);
	model.addObserver(this.updateView4);
	model.addObserver(this.updateView5);
	model.addObserver(this.updateView6); 

}





