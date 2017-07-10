
$(document).ready(function(){
    var flavors = ["Chocolate","Peanut Butter", "vanilla"];

    flavors.forEach(function(flavor){
      $("ul").append("<li>"+flavor );
    });
});
