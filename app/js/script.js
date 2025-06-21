let stockAvailable = Math.random() > 0.5;

function checkStock() {
    const stockStatus = document.getElementById('stockStatus');
    const additionalInfo = document.getElementById('additionalInfo');
    const meetingLink = document.getElementById('meetingLink');
    const supportLink = document.getElementById('supportLink');

    stockAvailable = Math.random() > 0.5;

    if (stockAvailable) {
        stockStatus.textContent = "✅ Stock Available!";
        additionalInfo.textContent = "You can place your order now. Limited slots available!";
        meetingLink.href = "https://meet.google.com/your-meeting-link";
        meetingLink.classList.remove('hidden');
        meetingLink.textContent = "Schedule a Meeting for Further Assistance";
        supportLink.classList.add('hidden');
    } else {
        stockStatus.textContent = "❌ Currently Out of Stock";
        additionalInfo.textContent = "You will be informed when it becomes available.";
        meetingLink.classList.add('hidden');
        supportLink.classList.remove('hidden');
        supportLink.textContent = "Need Help? Contact Support";
    }
}

window.onload = checkStock;
