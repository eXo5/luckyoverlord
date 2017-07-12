$(document).ready(function(){
	$("#myModal").on("click", function(){
    $("myModal").modal('show'); 
});
$("#navSignUp").on("click", function(){
    $("navSignUp").modal('show'); 
});


	
$("login").on("submit",function(){
	var loginName = $("#email").val();
	var password = $("#pwd").val();
	console.log(loginName);
	console.log(password);
	db.User.findOne({
		where: {
			username: loginName
		}
	})
	.then(function(data) {
		var dat = JSON.parse(JSON.stringify(data));
	console.log(dat);
	 res.redirect("userpage/" + data.name)})
})
})
