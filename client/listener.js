var $ = require('jquery')
var controller = require('./controller')
var dateHelpers = require('./dateHelpers')

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

  $('#countdown').click(function(e){
    console.log('start timer')
    var countdownTimer = dateHelpers.countdownTimer(birthday)
  })
}

module.exports = {
  listen:listen
}
