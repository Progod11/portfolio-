

// Chat Button Functionality
const chatFab = document.getElementById('chatFab');
const chatMenu = document.getElementById('chatMenu');
const closeChat = document.getElementById('closeChat');

chatFab.addEventListener('click', () => {
  chatMenu.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
  chatMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!chatFab.contains(e.target) && !chatMenu.contains(e.target)) {
    chatMenu.classList.remove('active');
  }
});
