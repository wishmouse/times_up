
//===========birthday / deathday=============

var birthday = "11-27-1970"
var birthdayFormatted = new Date(birthday)

var deathDate = new Date(birthday).setFullYear(birthdayFormatted.getFullYear() + 81 )
var deathDateFormatted = new Date(deathDate)


//================age & assigning values ====

var today = new Date()
var difference = today-birthdayFormatted
var age = Math.floor(difference/31536000000);

if (age => 15 && <= 24){
 return "15-24"
} else if {
  (age => 25 && =< 34)
  return "25-34"
  } else if {
    (age => 35 && =< 44)
    return "35-44"
    } else if {
      (age => 45 && =< 54)
       return "45-54"
     }else if {
        (age => 55 && =< 64)
          return "55-64"
      }



//================countdown =================


var countdown = function(deathDateFormatted, timer, callback){
  second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  year = day * 365,

// console.log("console.log 1:",second, minute, hour, day, year)

  end =  new Date(deathDate),
  timer,

  // console.log('end 2 :', end )

  calculate = function(){
    var now = new Date(),
    remaining = end.getTime()-now.getTime(),
    data;

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
      if(!timer){
        // timer = setInterval(calculate, second); //count down...
          }
        }

    data = {
      'years': Math.floor(remaining / year),
      'days': Math.floor((remaining % year) / day),
      'hours': Math.floor((remaining % day) / hour),
      'minutes': Math.floor((remaining % hour) / minute),
      'seconds': Math.floor((remaining % minute) / second)
    }
    console.log("the data 5: ", data )
 };

  calculate()
}
countdown()



