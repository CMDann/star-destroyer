// Save API click event
$(".api-btn").click(function(){
    var data = document.getElementById("highscore").value;
    localStorage["highscore"] = data;
});
