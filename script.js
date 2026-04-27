  const form = document.querySelector("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // Show existing user button if data exists
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingBtn.hidden = false;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const user = username.value;
      const pass = password.value;

      alert(`Logged in as ${user}`);

      if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
    });

    existingBtn.addEventListener("click", function () {
      const savedUsername = localStorage.getItem("username");

      alert(`Logged in as ${savedUsername}`);
    });