
$(document).ready(function(){
    var flavors = ["Chocolate","Peanut Butter", "vanilla"];

    flavors.forEach(function(flavor){
      $("ul").append("<li>"+flavor );
    });
});

// icecream
$(document).ready(function(){

  $("#factorial").submit(function(event){
    event.preventDefault();
    var response = ($("#word").val()).toLowerCase();
    var forward = response.split('');
    var forward1 = forward.join('');
    var backwards = forward.reverse();
    var backwards1 = backwards.join('');

    if (backwards1===forward1) {
      return alert("It's a palindrome.")
    } else {
      return alert("It's not a palindrome.")

    }
