var ing1 = $("#ing1").val().trim();
$.ajax({
	url:"https://api.nutritionix.com/v1_1/search/" + ing1 + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e"
	method: "GET"
}).done(function(response){
	console.log(response);
})