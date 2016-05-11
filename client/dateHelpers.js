var momentCountdown = require('moment-countdown')
var moment = require('moment');
var $ = require('jquery')

moment() .format();

function dateToDayOfWeek(date){
    return moment(date).format('dddd')
}

function yourAge(dateOfBirth){
  return moment(dateOfBirth).fromNow()
}

function deathDate(dateOfBirth){
  return moment(dateOfBirth).add(81.251, 'years').format('dddd Do MMMM YYYY')
}


function countdownTimer(dateOfBirth){
    setInterval(function(){
      var deathDate = moment(dateOfBirth).add(81.251, 'years')
      //setting countdown
      var years = moment.duration(deathDate - moment()).years()
      var months = moment.duration(deathDate - moment()).months()
      var days = moment.duration(deathDate - moment()).days()
      var minutes = moment.duration(deathDate - moment()).minutes()
      var seconds = moment.duration(deathDate - moment()).seconds()
      $('#years').text(years)
      $('#months').text(months)
      $('#days').text(months)
      $('#minutes').text(minutes)
      $('#seconds').text(seconds)
    }, 1000
    )

  return setInterval
}



module.exports = {
  dateToDayOfWeek:dateToDayOfWeek,
  yourAge:yourAge,
  deathDate:deathDate,
  countdownTimer:countdownTimer
}



