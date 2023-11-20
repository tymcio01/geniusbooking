document.addEventListener('DOMContentLoaded', function() {
    let calendarDays = document.getElementById('calendarDays');
    let currentDate = new Date();
    
    function generateCalendarDays() {
        calendarDays.innerHTML = ''; // Clear current calendar days
        for (let i = 0; i < 30; i++) {
            let day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i);
            let dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day.toDateString();
            calendarDays.appendChild(dayElement);
        }
    }
    
    // Event listeners for navigation buttons
    document.getElementById('prevMonth').addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() - 30);
        generateCalendarDays();
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() +
