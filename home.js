document.getElementById('cta-btn').addEventListener('click', function () {
  alert("Welcome to CricX! Explore the world of cricket.");
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
