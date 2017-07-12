// $(document).ready(function() {
//         $('#myModal').modal({
//             //dismissible: let exit modal on click outside the modal
//             complete: function(data) { //after modal is complete - send the post to the server
//                 alert("it worked");
//                 $.post("api/newLord", function(data) {
//                     console.log($("username"));
//                     console.log($("password"));
//                 })
//             }
//         }); //Pop up modal for new users
        
//     }); 

// $('#myModal').on('show.bs.modal', function (e) {
//   if (!data) return e.preventDefault() // stops modal from being shown
// })
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })
$(document).ready(function(){  
    $('#myModal').modal('show'); 
})
