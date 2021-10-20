const clock = () => {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let dateNow = document.getElementById('dateNow');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let interval = setInterval(clock,  0.1)

// Date

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };

  let newDate = new Date().toLocaleString("ru", options)

  dateNow.innerHTML = newDate;



