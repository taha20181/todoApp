const add_btn = document.getElementById("add-btn");
var input = document.getElementById("task_input");
var task_list = document .getElementById("task-list");
var date_time = document.getElementById("date-time");
var correct_btn = document.querySelectorAll("#correct-btn");
var counter_text = document.querySelector(".small");

input.value = "";
input.name = "";

date_time.innerHTML = moment().format('MMMM Do YYYY dddd');

var count = 0;
var id = 4000;
tasks = [];


// $("input").keypress(function(event) {
// 	if (event.which === 13) {
// 		var task = $(this).val();

// 		console.log(task);

// 		$("#task-list").append("<div class='task-list-element' id='" + id + "'><li>" + task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>");
// 	}
// });

function counter(count, type) {
	counter_text.innerHTML = "You have " + count + " tasks left";
}

$("#add-btn").click(function() {
	var task = input.value;
	$("#task-list").append("<div class='task-list-element' id='" + id + "'><li>" + task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>");
	tasks.push({"task": task, "id": id});
	id++;
	console.log(tasks);
	count++;
	counter(count);
	input.value = "";
	input.name = "";
});


$("#task-list").on("click", "div li span #correct-btn", (function() {
	$(this).parent().parent().css(
		{color: "green"}
	);
	$("#wrong-btn").remove();
	count--;
	counter(count);
}));

$("#task-list").on("click", "div li span #wrong-btn", (function(){
	console.log("Clicked Wrong Button");
	$(this).parent().parent().parent().remove();
	count--;
	counter(count);
}));


/* Animations on scroll */
$('.main-heading').waypoint(function(direction) {
    $('.main-heading').addClass('animated flash');
}, {
    offset: '50%'
});

// add_btn.addEventListener("click", function() {
//     var task = input.value;
//     console.log(task);

//     var node = document.createElement("div");
//     var node1 = document.createElement("li");
//     var textnode = document.createTextNode(task);
//     node1.appendChild(textnode);
//     node.appendChild(node1);
//     document.getElementById("task-list").appendChild(node);
// });