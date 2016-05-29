var buttonclick;

var movieList = [
  {
    id: "m0",
    name: "Avengers",
    price: 5,
    date: "2015/06/07",
    ticketLeft: 10
  },
  {
    id: "m1",
    name: "Star Wars",
    price: 9,
    date: "2016/04/07",
    ticketLeft: 18
  },
  {
    id: "m2",
    name: "Titanic",
    price: 3,
    date: "1996/06/19",
    ticketLeft: 7
  }
];

for (var i = 0; i < movieList.length; i++) {
  var currentTr = $('<tr>').attr('id', movieList[i].id).appendTo('.hcenter');
  $('<td>').addClass('movie-name').text(movieList[i].name).appendTo(currentTr);
  $('<td>').text('$' + movieList[i].price).appendTo(currentTr);
  $('<td>').text(movieList[i].date).appendTo(currentTr);
  $('<td>').text(movieList[i].ticketLeft).appendTo(currentTr);
  $('<td>').html('<button class="primary-btn btn-buy" data-toggle="modal" data-target="#buy-ticket-modal">Buy Ticket</button>').appendTo(currentTr);
}

$('.btn-buy').click(function(event){
	buttonclick=event.target;


	var movieRow=$(buttonclick).parent().parent().parent();
	var movieName=movieRow.find('.moviename').text();
	$('#movie_id').val(movieRow.attr('id'));
	$('#buy-ticket-modal .modal-header' ) .html('<h5>Buy '+ movieName)




});

function checkInvalid(user,attribute){
	if (user[attribute]=="") {
		$('#'+attribute).addClass('check').after('<p class="text-danger">Please Complete'+ attribute+'field</p>');
		return true;
	}
	else{return false;}

}



$('#buy-ticket-btn').click(function(event) {

	var user={
		first_name:$('#first_name').val(),
		last_name:$('#last_name').val(),
		phonenumber:$('#phonenumber').val(),
		movie_id:$('#movie_id').val()

	};
	$('input').removeClass('check');
	$('.check').remove();
	$('.text-danger').remove();

	if(checkInvalid(user,'first_name')){return;}
	if(checkInvalid(user,'last_name')){return;}
	if(checkInvalid(user,'phonenumber')){return;}


	console.log(user);
	// if (user.first_name==""){
	// $('#first_name').addclass('check');
	// return;
	// }



	 var newticket=$(buttonclick).parent().parent().prev().text()-1;
	 if(newticket>=0){

	 $(buttonclick).parent().parent().prev().text(newticket);

	 }
	 if(newticket==0)
	 {
	 	$(buttonclick).text("Sold Out").prop('disabled','disabled');
	 }




	 $('#buy-ticket-modal').modal('hide');
	 $('input[type="text"]').val("");


	// body...
});