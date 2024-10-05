document.addEventListener('DOMContentLoaded', function() {
    const timeDisplay = document.querySelector('.time-display');
    const dateDisplay = document.querySelector('.date-display');

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        const year = String(now.getFullYear()).padStart(2, '0');
        const mouth = String(now.getMonth()).padStart(2, '0'); 
        const day = String(now.getDay()).padStart(2, '0');  // 获取年月份
        dateDisplay.textContent = `${year}.${mouth}.${day}`;
    }

    // 初始化时间显示和年月份
    updateTime();

    // 每秒更新时间
    setInterval(updateTime, 1000);
});