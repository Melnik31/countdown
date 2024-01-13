const days =  document.getElementById ("days");
const hours = document.getElementById ("hours");
const minutes = document.getElementById ("minutes");
const seconds = document.getElementById ("seconds");
const main = document.querySelector ("main");

// set the date
const countDown = new Date("Jan 13 2024 13:36:00");

//update the count every 1 second
const update = setInterval(function () {
    const now = new Date().getTime();
    const diff = countDown - now;

    //now we are calculating time in days, hrs, minutes, and seconds.
    d = Math.floor(diff / (1000 * 60 * 60 * 24));
    hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    sec = Math.floor((diff % (1000 * 60)) / 1000);

    //update DOM
    days.innerHTML = d;
    hours.innerHTML = hrs < 10 ? '0' + hrs : hrs;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;

    if (diff < 0) {
        clearInterval(update);
        main.innerHTML = "Congrats! Get rest.";
    }

    console.log(days, hrs, minutes, seconds);
}, 1000)


 