document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeButton = document.querySelector('.close-button');

    chatButton.addEventListener('click', function () {
        chatWindow.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', function () {
        chatWindow.classList.add('hidden');
    });
}); 