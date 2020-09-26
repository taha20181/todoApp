const add_btn = document.getElementById("add-btn");
var input = document.getElementById("task_input");
var task_list = document .getElementById("task-list");
var date_time = document.getElementById("date-time");
var correct_btn = document.querySelectorAll("#correct-btn");
var counter_text = document.querySelector(".small");


console.log(counter_text.innerHTML);

input.value = "";
input.name = "";

date_time.innerHTML = moment().format('MMMM Do YYYY dddd');

var count = 0;
var id = 4000;
tasks = [];

function show_task(tasks) {
	tasks.forEach(function(task) {
		$("#task-list").append("<div class='task-list-element'><li>" + task.task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>");
	});
}

// $("input[type='text'").keypress(function(event) {
// 	if (event.which === 13) {

// 	}
// })

$("#add-btn").on("click", function() {
	var task = input.value;
	$("#task-list").append("<div class='task-list-element' id='" + id + "'><li>" + task + "<span><button class='btn' id='wrong-btn'><i class='fas fa-times-circle'></i></button><button class='btn' id='correct-btn'><i class='fas fa-check-circle'></i></button></span></li></div>");
	tasks.push({"task": task, "id": id});
	id++;
	console.log(tasks);
	count++;
	counter_text.innerHTML = "You have " + count + " tasks left";
	input.value = "";
	input.name = "";
});


$(document).on("click", "#correct-btn", function() {
	var list_text = document.querySelector(".task-list-element li");
	console.log(list_text.textContent);
	// $(".task-list-element").addClass("completed");
	console.log(list_text);

	tasks.forEach(function(task) {
		if (list_text.textContent == task) {
			console.log("this will be deleted");
		}
	});
	// $(this).addClass("temp");
	// $("#correct-btn").on("click", function() {
	// 	$(this).addClass("completed");
	// });
});

$("#correct-btn").click(function(){
	$(this).parent().remove();
});

  

// correct_btn.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//         alert("Hello world");
//     });
// });


// $("span").find("#correct-btn").forEach(function(btn) {
// 	btn.addEventListener("click", function() {
// 		alert("hello world");
// 	});
// });



/* Animations on scroll */
// $('.main-heading').waypoint(function(direction) {
//     $('.main-heading').addClass('animated flash');
// }, {
//     offset: '50%'
// });

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

// functionality added on 2nd AUG
// added jquery
// animation link
// modified code based on jquery
// added append instead of appendchild
// added event listeners like click and hover