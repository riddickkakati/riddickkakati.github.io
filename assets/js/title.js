var space = " ";
var speed = "50";
var pos = -20;
var msg = "Riddick Kakati- IIT Guwahati";
function Scroll()
{
    document.title = msg.substring(pos, msg.length) + space;
    pos++;
    if (pos > msg.length + 0) pos = -20;
    window.setTimeout("Scroll()", speed);

}
Scroll();
