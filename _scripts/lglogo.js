function rotate (event) 
{
    var x = event.clientX;
    var w = window.innerWidth;
    var midpoint = w / 2;
    var pos = x - midpoint;
	var val = (pos / midpoint) * 20;
	var logo = document.getElementById("lglogo");
	logo.style.transform = "perspective(550px) rotateY(" + val + "deg)";
}

document.addEventListener("mousemove", function (event)
{
	rotate (event)
}, false);