console.log("page loaded...");
var i = 2;
var e = 432;
function addUser1(a) {
    var a = document.querySelector('#user1');
    a.remove();
     i--;
     e++;
    var a = document.querySelector('#badge1');
        a.innerHTML = i;
    var a = document.querySelector('#badge2');
        a.innerHTML = e;
    
}
function addUser2(a) {
    var a = document.querySelector('#user2');
    a.remove();
     i--;
     e++;
    var a = document.querySelector('#badge1');
        a.innerHTML = i;
    var a = document.querySelector('#badge2');
        a.innerHTML = e;
    
}
function removeUser1(a) {
    var a = document.querySelector('#user1');
    a.remove();
     i--;
     var a = document.querySelector('#badge1');
        a.innerHTML = i;
}
function removeUser2(a) {
    var a = document.querySelector('#user2');
    a.remove();
     i--;
     var a = document.querySelector('#badge1');
        a.innerHTML = i;
}

function changeName(a){
    var name1 = "Tom";
    var a = document.querySelector('#name');
    a.innerHTML = name1;


}