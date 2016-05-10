// receive a date (birthday)
// set everything up
// start running the countdown

module.exports = startCoundown

function startCoundown(birthday){
  var birthday =  //
  var birthdayFormatted = new Date(birthday)
  // console.log("birthdayFormatted",birthdayFormatted)

  var deathDate = new Date(birthday).setFullYear(birthdayFormatted.getFullYear() + 81.25 )
  var deathDateFormatted = new Date(deathDate)

  // console.log("your death date:", deathDateFormatted)

  //================age & assigning values ====

  var today = new Date()
  var difference = today-birthdayFormatted
  var age = Math.floor(difference/31536000000);

  // console.log('your age:', age)

  countdown(.......)
}



  //================countdown =================
function countdown(deathDateFormatted, timer, callback){
  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24
  var year = day * 365
  // console.log("console.log 1:",second, minute, hour, day, year)
  var end =  new Date(deathDate)

  // console.log('end 2 :', end )
  function calculateRemainingTime(){
    var now = new Date()
    var remaining = end.getTime()-now.getTime()

    // console.log('remaining 4 :', remaining )
    if(isNaN(end)){
      console.log("err");
      return;
    }

    if(remaining <= 0){
      clearInterval(timer);
      if(typeof callback === 'function'){
        callback();
      }
    } else {
      // if(!timer){
      //   timer = setInterval(calculate, second); //count down...
      //    }
    }

    var data = {
      'years': Math.floor(remaining / year),
      'days': Math.floor((remaining % year) / day),
      'hours': Math.floor((remaining % day) / hour),
      'minutes': Math.floor((remaining % hour) / minute),
      'seconds': Math.floor((remaining % minute) / second)
    }
    // console.log("the data 5: ", data )
  }

  calculateRemainingTime()
}


