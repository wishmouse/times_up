var $ = require('jquery')
var controller = require('./controller')
var dateHelpers = require('./dateHelpers')


// console.log('day of the week', dateToDayOfWeek(new Date()))

function listen(){

  $('#birthdaySubmit').click(function(e){
    e.preventDefault()
    var birthday = $('#timer input[name=birthday]').val()
    console.log("birthday: ", birthday)
    var day = dateHelpers.dateToDayOfWeek(birthday)
    console.log('day', day)
    });


  $('#countdown').click(function(e){ //already have a click function here??
    console.log('start timer')
    e.preventDefault()
    controller.countdown(listen)
  })
}

module.exports = {
  listen:listen
}
