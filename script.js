const items = [

    {
        name: "Party Jollof Rice",
        cat: "rice",
        emoji: "🍚",
        price: "₦4,500",
        desc: "Smoky tomato rice served with fried plantain and coleslaw."
    },

    {
        name: "Egusi & Eba",
        cat: "soup",
        emoji: "🥣",
        price: "₦5,000",
        desc: "Rich melon-seed soup with assorted protein and soft eba."
    },

    {
        name: "Suya Platter",
        cat: "grill",
        emoji: "🍢",
        price: "₦6,500",
        desc: "Spiced grilled beef with onions, tomatoes and yaji."
    },

    {
        name: "Ofada Rice",
        cat: "rice",
        emoji: "🍛",
        price: "₦5,500",
        desc: "Local rice with signature ofada sauce and assorted meat."
    },

    {
        name: "Afang Soup",
        cat: "soup",
        emoji: "🥬",
        price: "₦5,500",
        desc: "Leafy vegetable soup packed with seafood and rich stock."
    },

    {
        name: "Grilled Chicken",
        cat: "grill",
        emoji: "🍗",
        price: "₦6,000",
        desc: "Char-grilled chicken glazed with a house pepper sauce."
    }

];


const grid = document.querySelector("#menuGrid");


/* DISPLAY MENU */

function render(category = "all") {

    const filteredItems =
        items.filter(item =>
            category === "all" || item.cat === category
        );


    grid.innerHTML = filteredItems.map(item => {

        return `
            <article class="item">

                <div class="emoji">
                    ${item.emoji}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.desc}
                </p>

                <div class="price-row">

                    <span>
                        ${item.price}
                    </span>

                    <button
                        class="add"
                        onclick="showToast('${item.name} added to your order.')">
                        Add +
                    </button>

                </div>

            </article>
        `;

    }).join("");
}


/* CATEGORY FILTERS */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            render(button.dataset.cat);

        });

    });


/* SCROLL TO ORDER */

function scrollToOrder() {

    document
        .querySelector("#order")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* TOAST */

function showToast(message) {

    const toast =
        document.querySelector("#toast");

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2600);

}


/* INITIAL MENU LOAD */

render();