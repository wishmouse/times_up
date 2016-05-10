var moment = require('moment');
moment().format();


function dateToDayOfWeek(date){
    return moment(date).format('dddd')
}


function yourAge(date){ // receive birthday
  console.log('==================================')
  console.log("moment......",moment(date).fromNow())
}


// module.exports = dateToDayOfWeek


module.exports = {
  dateToDayOfWeek:dateToDayOfWeek,
  yourAge:yourAge
}



