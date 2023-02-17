let hamberger = document.getElementById("hamberger");
let navbar = document.querySelector("nav");
let li = document.querySelectorAll("li");
let toTop = document.getElementById("to-Top");
let addedPro = document.querySelectorAll("#addedPro");
let showMore = document.getElementById("showMore");
let buyButton = document.querySelectorAll("#buy");
let mainImg = document.getElementById("mainImg");
let proImg = document.querySelectorAll("#proImg");
let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let addToCart = document.getElementById("addToCart");
let readButton = document.querySelectorAll("#readButton")



// the toggle button
hamberger.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        if (navbar.style.height === "55px") {
            navbar.style.height = "55vh";
            li.forEach(element => {
                element.style.display = 'block';
            });
            hamberger.classList.remove("fa-bars");
            hamberger.classList.add("fa-xmark");
        } else {
            navbar.style.height = "55px";
            li.forEach(element => {
                element.style.display = 'none';
            });
            hamberger.classList.remove("fa-xmark");
            hamberger.classList.add("fa-bars");
        };
    };
});

// back to top button
window.addEventListener("scroll" , () => {
    if (window.scrollY > 100) {      //checking if the window is scrolling down more than 100px.
        toTop.style.display = "block";
    }else {
        toTop.style.display = "none";
    };
});

//checking if we're in the shop page
//the products are in the both pages, it makes an error in the home page because there is no show more button.
if (window.location.pathname === "/shop.html") {
    // show more products button
    showMore.addEventListener("click" , () => {
        addedPro.forEach(element => {
            if (element.style.display === "none") {
                element.style.display = "block";
                showMore.innerText = "show less";
            } else {
                element.style.display = "none";
                showMore.innerText = "show more"
            };
        });
    });
};

// displaying the product details page
if (window.location.pathname === "/shop.html" || window.location.pathname === "/index.html") {
    buyButton.forEach(element => {
        element.addEventListener("click", () =>{
            location.pathname = "/product.html"
        })
    })
}

// products details, choosing the product color & style
proImg.forEach(element => {
    element.addEventListener("click", () => {
        mainImg.src = element.src;
    });
});

// add to cart button
if (window.location.pathname === "/product.html" ) {
    addToCart.addEventListener("click", () => {
        if ((size.value !== "Select Size") && (quantity.value<=10 && quantity.value >=1) ) {
            location.pathname = "/cart.html"
        };
        if (size.value === "Select Size") {
            alert("Select A Size !")
        }else if (quantity.value > 10) {
            alert("Maximum 10 items !")
        }else if (quantity.value < 1) {
            alert("Minimum 1 item !")
        };
    });    
}

// read button
readButton.forEach(element => {
    element.addEventListener("mousedown",() => {
        element.style.transform = "translate3d(0, 0, 10px)"
    });
    element.addEventListener("mouseup",() => {
        element.style.transform = "translate3d(-4px, -4px, 10px)"
    });
})