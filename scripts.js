// Common UW Pride Circle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Calendar functionality
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentMonthIndex = 2; // March
    let currentYear = 2025;
    
    // Initialize and update calendar if on events page
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    
    if (currentMonthElement && prevMonthButton && nextMonthButton) {
        // Previous month button
        prevMonthButton.addEventListener('click', function() {
            currentMonthIndex--;
            if (currentMonthIndex < 0) {
                currentMonthIndex = 11;
                currentYear--;
            }
            updateCalendar();
        });
        
        // Next month button
        nextMonthButton.addEventListener('click', function() {
            currentMonthIndex++;
            if (currentMonthIndex > 11) {
                currentMonthIndex = 0;
                currentYear++;
            }
            updateCalendar();
        });
        
        // Update calendar display
        function updateCalendar() {
            currentMonthElement.textContent = `${monthsArr[currentMonthIndex]} ${currentYear}`;
            
            // In a real app, you would regenerate the calendar dates here
            // For this demo, we just update the month display
        }
    }
    
    // Handle newsletter toggles
    const newsletterToggles = {
        on: document.getElementById('newsletterOn'),
        off: document.getElementById('newsletterOff')
    };
    
    const contactToggles = {
        on: document.getElementById('contactOn'),
        off: document.getElementById('contactOff')
    };
    
    if (newsletterToggles.on && newsletterToggles.off) {
        newsletterToggles.on.addEventListener('click', function() {
            this.classList.add('active');
            newsletterToggles.off.classList.remove('active');
        });
        
        newsletterToggles.off.addEventListener('click', function() {
            this.classList.add('active');
            newsletterToggles.on.classList.remove('active');
        });
    }
    
    if (contactToggles.on && contactToggles.off) {
        contactToggles.on.addEventListener('click', function() {
            this.classList.add('active');
            contactToggles.off.classList.remove('active');
        });
        
        contactToggles.off.addEventListener('click', function() {
            this.classList.add('active');
            contactToggles.on.classList.remove('active');
        });
    }
    
    // Handle logout button
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear login state
            localStorage.removeItem('isLoggedIn');
        });
    }
    
    // Check if we're on a page that requires login
    const profilePage = document.querySelector('.page-content h3');
    if (profilePage && profilePage.textContent === 'Your Profile') {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn && window.location.pathname.includes('profile.html')) {
            // Redirect to login
            window.location.href = 'login.html';
        }
    }
});