// ExampleViewController Object constructor
var ExampleViewController = function (view, model) {

	view.plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
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
		view.view5.attr("style","display:true;");
	});

	view.print.click(function() {
		view.view5.attr("style","display:none;");
		view.view6.attr("style","display:true;");
	})

	view.goBackEdit5.click(function() {
		view.view5.attr("style","display:none;");
		view.view2.attr("style","display:true;");
		view.view3.attr("style","display:true;");
	})

	view.goBackEdit6.click(function() {
		view.view6.attr("style","display:none;");
		view.view2.attr("style","display:true;");
		view.view3.attr("style","display:true;");
	})
}

