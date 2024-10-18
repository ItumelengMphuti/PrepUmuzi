function time(min) {
    let hour = parseInt(min/60);
    let minute = parseInt(min % 60);

    if (hour === 0) { 
        if (minute === 0) {
            return "no time";
        }
    } else if (hour === 1) {  // For 1 hour
        if (minute === 0) {
            return "1 hour";
        } else if (minute === 1) {
            return "1 hour and 1 minute";
        } else {
            return "1 hour and " + minute + " minutes";
        }
    } else if (hour > 0) {  // For more than 1 hour
        if (minute === 0) {
            return hour + " hours";
        } else if (minute === 1) {
            return hour + " hours and 1 minute";
        } else {
            return hour + " hours and " + minute + " minutes";
        }
    }
}

time(0);
console.log(time(0))
module.exports = { time };