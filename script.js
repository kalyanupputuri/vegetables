function BAG(){
    alert("ADD SOME PRODUCTS")
}
var header =document.querySelector("a")
header.style.color='blue'
function getRandomColor()
{
    var letters ="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color
}
function changeHeaderColor()
{
    colorInput =getRandomColor()
    header.style.color = colorInput;
}
setInterval("changeHeaderColor()",500);