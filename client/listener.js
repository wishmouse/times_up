var $ = require('jquery')
var controller = require('./controller')
var dateHelpers = require('./dateHelpers')


// console.log('day of the week', dateToDayOfWeek(new Date()))

function listen(){

  $('#birthdaySubmit').click(function(e){

    e.preventDefault()
    var birthday = $('#timer input[name=birthday]').val()
    var day = dateHelpers.dateToDayOfWeek(birthday)
    var yourAge = dateHelpers.yourAge(birthday)
    var deathDate = dateHelpers.deathDate(birthday)
    var countdownTimer = dateHelpers.countdownTimer(birthday)
    console.log("day of the week :", day)
    console.log('birthday:', birthday)
    $('#day').append(day)
    $('#yourAge').append(yourAge)
    $('#deathDate').append(deathDate)
     });

  $('#countdown').click(function(e){ //already have a click function here??
    console.log('start timer')
    var countdownTimer = dateHelpers.countdownTimer(birthday)
  })
}

module.exports = {
  listen:listen
}
