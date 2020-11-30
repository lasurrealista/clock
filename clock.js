'use script';

const clock = document.querySelector('.clock');

const currentTime = () => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    clock.textContent = hour + ' : ' + minute + ' : ' + second;
    setTimeout(() => { currentTime() }, 1000);
};

const update = (number) => {
    if (number < 10) { return '0' + number } 
    else {return number};
};

currentTime();

/* With AM/PM

const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    let amPm = 'AM';

    if (hour > 12) {
        hour = hour - 12; 
        amPm = 'PM'; 
    }

    if (hour === 0) {
        hour = 12;
    }

    clock.textContent = hour + ' : ' + minute + ' : ' + second + amPm;
    setTimeout(() => { currentTime() }, 1000);
};

const update = (number) => {
    if (number < 10) { return '0' + number } 
    else {return number};
};

currentTime();
*/