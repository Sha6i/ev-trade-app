// Сигнали за 14:50 и 19:50
function checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    if ((hours === 14 && minutes === 50) || 
        (hours === 19 && minutes === 50)) {
        alert("ТРЪГВА СИГНАЛ!");
        new Audio("https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3").play();
    }
}
setInterval(checkTime, 60000); // Проверка на всяка минута
