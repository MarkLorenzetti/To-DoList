//check off specific todos by clicking
//Seleziona specifici "todos" cliccando

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
//Clicca sulla x per cancellare un Todo

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		//"this" refer to the entired 'li' not to the 'span'
		$(this).remove(); //remove need to be nested to allow a nice fade out
	});
	event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new todo text from input
		var todotext = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + todotext + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});