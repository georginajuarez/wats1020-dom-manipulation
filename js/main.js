//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$(document).ready(function() {
  var userInfo = {
    firstName: 'Jane',
    lastName: 'Doe'
  };
  var voteCounts = {
    great: 0,
    greatest: 0,
    total: 0
  };
  // Place all your Javascript code inside this "document ready" function so
  // it does not run until the DOM is ready for Javascript manipulation.

  // TODO: Create a function to listen for clicks on the "login" button.
  //      1. When a user clicks the "login" button, hide the login
  //          form elements on the page.
  //      2. Fill the user's first and last name into `div.user-info`.
  //      (NOTE: You do not have to perform any validation on the data as
  //          a base requirement.)


  //create a function that handles the on click event
  //you need to tell it I want the button form but I want it from these parent elements.
  //Trivia: # was originally called an oglethorpe
  //don't need to set a var start w/ identifier

  //jquery syntax

  //First section
  $('#login-form .btn').on('click', function(event) {
    $('#login-form').hide(300); //300 is how many millisecs it takes to hide.
    //this will click button and hide form
    $('.user-fullname').text(userInfo.firstName + " " + userInfo.lastName);
    $('user-info').show(); //is under info section in div
  });

  //the dot is how you get each attributte



  // TODO: Create a function to listen for clicks on all the "View Details"
  // buttons so that when a user clicks a "View Details" button they see
  // the content contained in the elements with the class "details" in the
  // proper part of the screen.
  //      1. When user clicks a "view details" button, find the parent of that element.
  //      2. Within that parent, find all the elements that have the class `details`.
  //      3. Toggle visibility of all the elements within that parent with the class `details`.
  //      4. Change the text of the "view details" button to read "hide details" so the user
  //          understands they can hide the text again.


  //Section 2 on Shawns video
  //single quote signify action, text, or class/id
  $('.view-details').on('click', function(event) {
    console.log(event);
    var targetElement = event.target;
    //setting .target tells us what to target
    var container = targetElement.parentElement.parentElement
    $(container).find('.details').each(function(index, el) {
      //when you use $ query it will always return in an array
      //you can refrence that element if needed
      if ($(el).is('visible')) {
        $(el).fadeOut();
        targetElement.innerText = "View Details"
      } else {
        $(el).fadeIn();
        targetElement.innerText = "Hide Details"
      };

    });

  }); //belongs to 1st view details

  //SOMETHING WENT WRONG HERE AND I NEED TO UPDATE 1/29
  

  // TODO: Create a function that listens for clicks on the voting buttons and
  // looks at the `data-vote` attribute on each button to see what was voted for,
  // then determines the updated vote breakdown to adjust the progress bars.
  //      1. Set up an event listener on the buttons with the `vote` class.
  //      2. When a button is clicked, look at the `data-vote` attribute to determine
  //          what the user is voting for ("great" or "greatest").
  //      3. Increment the counter for whichever vote talley is affected.
  //      4. Determine the respective percentages (out of 100) for each progress bar.
  //      5. Modify the `width` attribute on each progress bar to set the updated percentage.


  //Section 3
  //need to create another on click
  $('.vote').on('click', function(event) {
    //need a counter to keep track of votes
    // first figure out which button was clicked
    if ($(this).attr('data-vote') === 'great' {
        voteCounts.great = voteCounts.great + 1;
      } else {
        voteCounts.greatest = voteCounts.greatest + 1;
      }

    
    // * IF THIS IS REMOVED SYNTAX HIGHLIGHTING CHANGES/RESTORES
    
    //first if === means value and type are both equal == only checks for value
    voteCounts.total = voteCounts.total + 1;
    // change vote counts numbers to match html or html to equal 0
    var greatPercent = voteCounts.great / voteCounts.total * 100;
    var greatestPercent = voteCounts.greatest / voteCounts.total * 100;
    //could have put math and string here but nice to keep seprate
);
    //IF THIS IS MOVE TO * ABOVE LOSE SYNTAX HIGHLIGHTING
    $('.great-progress').css('width', greatPercent + '%');
    $('.greatest-progress').css('width', greatestPercent + '%');

  }); //.vote



});