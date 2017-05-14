function myFunction() {
    var p = document.createElement("p");
    var input = document.getElementById("Input").value;
    var t = document.createTextNode(input);
    p.appendChild(t);
    if (input == '') {
        alert ("Not Task");
    } else {
        document.getElementById("task").appendChild(p);
    }
    document.getElementById("Input").value = "";

    var button = document.createElement("BUTTON");
    var text = document.createTextNode("X");
    button.className = "close";
    button.appendChild(text);
    p.appendChild(button);

    for (i = 0 ; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var button = document.createElement("button");
    var text = document.createTextNode("X");
    button.className = "close";
    button.appendChild(text);
    myNodelist[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
