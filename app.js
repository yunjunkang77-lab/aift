// Initialize Lucide Icons
lucide.createIcons();

// Simple D-Day Logic (Placeholder)
const dDayCount = document.getElementById('d-day-count');
// You can add real date logic here later

// Study Timer Logic
let seconds = 0;
let timerId = null;
const timerDisplay = document.querySelector('.timer-display');
const startBtn = document.querySelector('.btn-primary');

function updateTimer() {
    seconds++;
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    timerDisplay.textContent = 
        `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = '공부 시작';
        startBtn.style.background = '#10b981';
    } else {
        timerId = setInterval(updateTimer, 1000);
        startBtn.textContent = '공부 중단';
        startBtn.style.background = '#ef4444';
    }
});

// Simple Post Interaction
document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('상세 페이지로 이동합니다. (프로토타입)');
    });
});
