//set up html container and button interaction
var display = document.getElementById("count-container")
var btn = document.getElementById("count-btn")
var clicks = JSON.parse(localStorage.getItem("clicks")) || 0
//set up variable to count clicks
var count = clicks
display.textContent = count
//add to webstorage
document.addEventListener("click", function(){
    count ++
    display.textContent = count
    localStorage.setItem("clicks",JSON.stringify(count))
})



//extra credit set up timer/count down
var countDown = document.getElementsByTagName("h1")


var i = 30;
(function timer(){
    if (--i < 0)
    return;
    setTimeout(function(){
        document.getElementsByTagName("h1")[0].innerHTML = i + " seconds "
        timer();
    }, 1000);
    
});
