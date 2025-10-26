const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  toggle.textContent = document.body.classList.contains("darkmode")
    ? "Light Mode ☀"
    : "Dark Mode ⏾";
});

// -------------TO-DO List-------------
const todoinput = document.getElementById("todoinput");
const todobtn = document.getElementById("todobtn");
const todo = document.getElementById("todo");

todobtn.addEventListener("click", () => {
  const task = todoinput.value.trim();
  if (task == "") return;

  const div = document.createElement("div");
  div.classList.add("todoitem");
  div.innerHTML = `
    <span>${task}</span>
    <button>Delete</button>
    `;
  div.querySelector("button").addEventListener("click", () => div.remove());
  todo.appendChild(div);
  todoinput.value = "";
});

todoinput.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        todobtn.click();
    }
})

// --------------------IMAGE GALLERY------------------
const galleryinput = document.getElementById("galleryinput");
const imgbtn = document.getElementById("imgbtn");
const imglist = document.getElementById("imglist");

imgbtn.addEventListener("click", () => {
  const url = galleryinput.value.trim();
  if (!url) return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "User Image";
  img.addEventListener("click", () => img.remove());
  imglist.appendChild(img);
  galleryinput.value = "";
});

galleryinput.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        imgbtn.click();
    }
})

// ---------------------CONTACT FORM-------------
const contact = document.getElementById("contact");
const formerror = document.getElementById("formerror");

contact.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !gender || !dob || !message) {
    formerror.textContent = " Please fill out this field";
    formerror.style.color = "red";
    return;
  }

  const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailpattern.test(email)) {
    formerror.textContent = "Please enter a valid email address";
    formerror.style.color = "red";

    setTimeout(() => {
      formerror.textContent = "";
    }, 2000);
    return;
  }

  const today = new Date();
  const birthdate = new Date(dob);
  if (birthdate > today) {
    formerror.textContent = " Date of birth cannot be in future ";
    formerror.style.color = "red";

    setTimeout(() => {
      formerror.textContent = "";
    }, 2000);

    return;
  }

  formerror.textContent = "Message sent successfully!";
  formerror.style.color = "green";
  contact.reset();

  setTimeout(() => {
    formerror.textContent = "";
  }, 2000);
});
