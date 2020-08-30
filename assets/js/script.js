var now = moment().format("MMMM Do, YYYY");

//displays the current date in the Header
var displayTime = document.getElementById("currentDay");
displayTime.innerHTML = now;

// var saveTask = function() {
//     localStorage.setItem()
// }


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
        console.log(inputId, "input");
        console.log(hour, "hour");

    });
}

colorTime();
