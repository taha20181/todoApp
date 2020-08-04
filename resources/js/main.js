const submit_btn = document.getElementById("submit_btn");
var input = document.getElementById("task_input");
var task_list = document .getElementById("task-list");
var date_time = document.getElementById("date-time");
var correct_btn = document.getElementById("correct-btn");

input.value = "";
input.name = "";

date_time.innerHTML = moment().format('MMMM Do YYYY dddd, h:mm:ss a');
var count = 0;
$("#submit_btn").on("click", function() {
    var task = input.value;
    console.log(task);

    if (count == 0) {
        $("#task-list").append("<div class='list-item-container current'><li class='list-item'>" + task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>")
        count++;
    } else {
        $("#task-list").append("<div class='list-item-container'><li class='list-item'>" + task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>")
        count++;
    }
    // var node = document.createElement("div");
    // var node1 = document.createElement("li");
    // var textnode = document.createTextNode(task);
    // node1.appendChild(textnode);
    // node.appendChild(node1);
    // document.getElementById("task-list").appendChild(node);
    input.value = "";
    input.name = "";
});


/* Animations on scroll */
// $('.main-heading').waypoint(function(direction) {
//     $('.main-heading').addClass('animated flash');
// }, {
//     offset: '50%'
// });







// functionality added on 2nd AUG
// added jquery
// animation link
// modified code based on jquery
// added append instead of appendchild
// added event listeners like click and hover