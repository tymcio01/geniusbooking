document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    let currentDate = new Date();

    function generateCalendar() {
        calendar.innerHTML = ''; // Clear the calendar
        let startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

        for (let i = 0; i < 30; i++) {
            let day = new Date(startDate);
            day.setDate(day.getDate() + i);

            let dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day.getDate();
            calendar.appendChild(dayElement);
        }
    }

    prevMonth.onclick = function() {
        currentDate.setDate(currentDate.getDate() - 30);
        generateCalendar();
    };

    nextMonth.onclick = function() {
        currentDate.setDate(currentDate.getDate() + 30);
        generateCalendar();
    };

    generateCalendar(); // Initial call to display the calendar
});
