

//🔸 Modal window function

// ^ querySelector 
const nav_open_window_button = document.querySelector(".nav_open_window_button");
const nav_closed_window_button = document.querySelectorAll(".nav_closed_window_button");

// ^ addEventListener 
nav_open_window_button.addEventListener("click", function() {
    document.body.classList.add("js-when-button-been-clicked")
});

nav_closed_window_button.forEach(el => {
    el.addEventListener('click', function() {
        document.body.classList.remove('js-when-button-been-clicked')
        console.log("remove");
    });
});

console.log("Thanks for visiting");