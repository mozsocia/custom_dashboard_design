const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});


function applyClassBasedOnScreenSize() {
  var sidebar = document.querySelector('.sidebar');
  
  if (window.innerWidth < 774) {
      sidebar.classList.add('close');
  } else {
      sidebar.classList.remove('close');
  }
}

// Initial call to set the class based on initial screen size
applyClassBasedOnScreenSize();

// Attach the function to the window resize event to update the class on screen size changes
window.addEventListener('resize', applyClassBasedOnScreenSize);