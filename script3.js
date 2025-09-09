document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Clear previous
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    let valid = true;

    // Name
    const name = document.getElementById('name').value.trim();
    if(name === '') {
      let err = document.getElementById('nameError');
      err.textContent = 'Name is required.'; err.style.display = 'block';
      valid = false;
    }
    // Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(email === '') {
      let err = document.getElementById('emailError');
      err.textContent = 'Email is required.'; err.style.display = 'block';
      valid = false;
    } else if(!emailPattern.test(email)) {
      let err = document.getElementById('emailError');
      err.textContent = 'Please enter a valid email.'; err.style.display = 'block';
      valid = false;
    }
    // Message
    const message = document.getElementById('message').value.trim();
    if(message === '') {
      let err = document.getElementById('messageError');
      err.textContent = 'Message is required.'; err.style.display = 'block';
      valid = false;
    }
    if(valid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });

  // Dynamic To-Do List
  function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if(task === '') return;
    const ul = document.getElementById('todoItems');
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button class="remove" onclick="removeTask(this)">Remove</button>`;
    ul.appendChild(li);
    input.value = '';
  }
  function removeTask(btn) {
    btn.parentElement.remove();
  }