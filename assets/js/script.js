var now = moment().format("MMMM Do, YYYY");

//displays the current date in the Header
var displayTime = document.getElementById("currentDay");
displayTime.innerHTML = now;



//save button clicked function
$(document).ready(function () {
    $(".saveBtn").click(function() {

        var inputText = $(this).siblings("input").val().trim();
        var hour = $(this).siblings("section").text()

        localStorage.setItem(hour, inputText);
    
        //console.log("save clicked")
    
    })
    
});

$("#9am").val(localStorage.getItem("9AM"));
$("#10am").val(localStorage.getItem("10AM"));
$("#11am").val(localStorage.getItem("11AM"));
$("#12pm").val(localStorage.getItem("12PM"));
$("#13pm").val(localStorage.getItem("1PM"));
$("#14pm").val(localStorage.getItem("2PM"));
$("#15pm").val(localStorage.getItem("3PM"));
$("#16pm").val(localStorage.getItem("4PM"));
$("#17pm").val(localStorage.getItem("5PM"));



var hour = moment().hour();

//function to show colors of past, present and future times for user alert
var colorTime = function() {
    $(".input").each(function () {
        var inputId = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour > inputId) {
            $(this).addClass("past");
        } else if (hour < inputId) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
        //console.log(inputId, "input");
        //console.log(hour, "hour");

    });
}

//calls function to show colors
colorTime();
