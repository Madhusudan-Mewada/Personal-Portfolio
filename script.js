document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.name.value || !this.email.value || !this.subject.value || !this.message.value ) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message sent successfully!");
    this.reset();
});