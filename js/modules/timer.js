const timer = (deadline, block) => {
  const timeBlock = document.querySelector(block);
  const timeDays = timeBlock.querySelector('.count_1 span');
  const timerHours = timeBlock.querySelector('.count_2 span');
  const timerMinutes = timeBlock.querySelector('.count_3 span');
  const timerSeconds = timeBlock.querySelector('.count_4 span');
  let idInterval
  
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor((timeRemaining / 60 / 60 / 24));
    let hours = Math.floor((timeRemaining / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {timeRemaining, hours, minutes, seconds, days}
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()
    
    if (getTime.timeRemaining > 0) {
      timeDays.textContent = ('0' + getTime.days).slice(-2);
      timerHours.textContent = ('0' + getTime.hours).slice(-2);
      timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
      timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);
    } else {
      clearInterval(idInterval)
    }
  }
  idInterval = setInterval(updateClock, 1000)

}

export default timer