function send(message) {
    socket.send(message);
}
var nicked = false;
var socket = new WebSocket("ws://128.199.142.235:9000");
socket.onopen = function () {
    socket.send("supbro")
}, socket.onmessage = function (message) {
    var data = message.data;
    if ("ping" != data && "fever" != data && data.startsWith("msg|") == false) {
        var json = JSON.parse(data);
        document.getElementById("clicks").textContent = "Wumpuses: " + json.clicks;
        document.getElementById("cps").textContent = "Wumpuses Per Second: " + json.cps;
        document.getElementById("users").textContent = json.users;
        document.getElementById("levelBar").style.width = 100 - (parseInt(json.max) - parseInt(json.exp)) / (10 * parseInt(json.level)) + "%";
        if (json.fever == "false") document.getElementById("level").textContent = "Level: " + json.level;
        if (json.fever == "true") document.getElementById("level").textContent = "FEVER MODE! x2 WUMPUSES PER CLICK!";
        if (json.fever == "true" && feverr == false) fever();
    }
    if (data.startsWith("msg|") && nicked == true) {
        var massage = data.split('|').pop();
        document.getElementById('theActualChatRoom').appendChild(document.createTextNode("\n" + massage));
    }
}, window.addEventListener("keydown", function (a) {
    if (13 === a.keyCode) {
        if (nicked == false) memeslol();
        if (nicked) pootDispenserHere();
    }
}, !1);
var feverr = false;
function fever() {
    feverr = true;
    audio.play();
    window.setTimeout(function () {
        document.getElementById('title').textContent = "TAP FAST NOW!";
        document.getElementById('title').style.animationName = 'memes';
        document.getElementById('levelBar').style.animationName = 'bidoof, woot';
        window.setTimeout(function () {
            document.getElementById('title').textContent = "Click The Wumpus!";
            document.getElementById('title').style.animationDuration = '1s';
            document.getElementById('title').style.animationName = 'test';
            document.getElementById('levelBar').style.animationName = '';
            document.getElementById('levelBar').style.width = '0%';
            feverr = false;
        }, 27000);
    }, 3000);
}

function memeslol() {
    if (nicked == true) {
        pootDispenserHere();
        return;
    }
    if (document.getElementById('daBox').value == "" || document.getElementById('daBox').value.startsWith(" ") || document.getElementById('daBox').value.length > 15) return;
    send('nick:' + document.getElementById('daBox').value);
    document.getElementById('daBox').value = "";
    document.getElementById('theActualChatRoom').textContent = "";
    document.getElementById('theActualChatRoom').appendChild(document.createTextNode("Welcome to the ChatRoom!"));
    nicked = true;
}

function pootDispenserHere() {
    if (document.getElementById('daBox').value == "") return;
    send('msg:' + document.getElementById('daBox').value);
    document.getElementById('daBox').value = "";
    setTimeout(function () {
        document.getElementById('daBox').value = "";
    }, 10);
}

function iclickedit() {
    send("click");
    document.getElementById('everything').className= "imCLICKING";
    setTimeout(function () {
        document.getElementById('everything').className = "everything";
    }, 100);
}

// This is to disable Inspect Element using JavaScript easily.
// The first way should block right-clicking and selecting Inspect Element
$(document).bind("contextmenu",function(e)) {
  e.preventDefault();
});
// The other way which should work well combindeded is to disable the F12 function
$(document).keydown(function(e)){
  if(e.which === 123){
    return false;
  }
});
// That is all so far another thing that should work is blocking keypress by swapping
$(document).keydown(function(e)){
// With,
$(document).keypress(function(e)){
// Thanks for using this tutorial. If possible use the space below to include your response using the tag //

// Great Experience! - ckchoudek
