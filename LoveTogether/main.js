const time = document.getElementById('time');
setInterval(() => {
    const now = new Date();                                   //Lấy thời gian hiện tại
    const start =new Date('2022-5-21')                        //Lấy thời gian theo ngày tháng năm chỉ định
    const milliseconds = now.getTime() - start.getTime();     //
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const hoursTotal = hours % 24;
    const minutesTotal = minutes % 60;
    const secondsTotal = seconds % 60;
    time.innerHTML = `<i class='bx bxs-calendar' style='color:#5badf2'  ></i> ${days}days ${hoursTotal}:${minutesTotal}:${secondsTotal}s`
}, 1000);

function redirectTo(url) {
  window.location.href = url;
}

