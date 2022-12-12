// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    

  //  Added code to get any user input that was saved in localStorage 
  //
    localStorage.setItem(time, text);
  })
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

 
  
  // TODO: Added code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMM D, YYYY'))
  


function timeTracker() {
  //get current number of hours.
  var timeNow = moment().hours();

  // to loop over time blocks
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
          //$(this).removeClass("future");
         // $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
          $(this).removeClass("past");
         // $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");

      }
  })
}
timeTracker();

var interval = setInterval(timeTracker, 15000)
});
