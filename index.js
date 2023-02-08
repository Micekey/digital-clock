let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setTimeout(() => {
        updateClock();
    },999)
}

updateClock();