const hour = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function time(){
    const date = new Date();
    hour.innerHTML = `${date.getHours()}hr` ;
    min.innerHTML = `${date.getMinutes()}min` ;
    sec.innerHTML = `${date.getSeconds()}sec` ;
}

setInterval(time , 1000);