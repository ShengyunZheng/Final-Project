let games = [];
let userInput;
$(".add").click(function(){
	userInput=$(".picture-url").val();
   	games.push(".picture-url");
    $(".gallery").append("<img src=" + userInput + ">");
    $("input:text").val("");

});