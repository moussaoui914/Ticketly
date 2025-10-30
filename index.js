
const eventCard = document.querySelectorAll(".event-card");
document.querySelector(".second-window .progress-line span:nth-child(1)").classList.add("active");


// eventCard.addEventListener("click" , choseCard)

// eventCard.forEach(card => card.addEventListener('click', choseCard.bind(null, card)))
// let list = [
//     {id : 1 ,title:"Concert in the Park",lieu:"Central park , New York"},
//       {title:"Concert in the Park",lieu:"Central park , New York"}
// ]
let titre; let place; let time; let seats; let placeNumber; let price;
for (let cards of eventCard) {
    cards.addEventListener('click', () => {
        choseCard(cards);
        titre = cards.querySelector(".second h4").textContent;
        localStorage.setItem("titre", titre);
        place = cards.querySelector(".second p").firstChild.textContent;
        localStorage.setItem("place", place);
        time = cards.querySelector(".second h5").textContent;
        localStorage.setItem("time", time);
        seats = cards.querySelector(".second p.seats").textContent;
        localStorage.setItem("seats", seats);
        seats = cards.querySelector(".second p.seats").textContent;
        placeNumber = cards.querySelector(".second p.seats span").textContent;
        localStorage.setItem("placeNumber", placeNumber);
        price = cards.querySelector(".footer-events p span").textContent;
        localStorage.setItem("price", price);

    });
}

titre = localStorage.getItem("titre");
place = localStorage.getItem("place");
time = localStorage.getItem("time");
seats = localStorage.getItem("seats");
placeNumber = localStorage.getItem("placeNumber");
price = localStorage.getItem("price");






function choseCard(card) {
    card.classList.toggle("choosen");
}

let secondPage = document.querySelector(".switch");

secondPage.addEventListener('click', () => {
    document.querySelector(".second-window").style.display = "block";
    document.querySelector(".first-window").style.display = "none";
    document.querySelector(".second-window .progress-line span:nth-child(2)").classList.add("active");
    document.querySelector(".second-window .progress-line span:nth-child(1  )").classList.remove("active");
    creatCard();

})
let participant;
let moin;
let plus;
let thirdPage;

function creatCard() {
    let cards = document.querySelector(".Buillet");
    cards.innerHTML = `
            <div class="image-event">
                <img src="img/event.jpg" alt="">
            </div>
            <div class="second">
                <h2>${titre}</h2>
                <p class="place">${place}</p>
                <h5>${time}</h5>
                <p class="seats">${seats}</p>
                <div class="footer-events">
                    <p>$${price} per ticket</p>
                </div>
                <div class="users">
                    <label>Paritcipants</label>
                    <div class="counts">
                        <i class="fa-solid fa-minus moin"></i>
                        <p>0</p>
                        <i class=" plus fa-solid fa-plus"></i>
                    </div>
                </div>
                <button class="switch-1">Suivant</button>
            </div>
        `
    moin = document.querySelector(".counts i.moin");
    plus = document.querySelector(".counts i.plus")
    thirdPage = document.querySelector(".switch-1");
    minus();
    add();
    switchThirdPage();
}
function minus() {
    moin.addEventListener('click', () => {
        participant = document.querySelector(".counts p").textContent;
        participant = Number(participant);
        participant = participant - 1;
        document.querySelector(".counts p").textContent = participant;
        localStorage.setItem("participants", participant);
    })
}
function add() {
    plus.addEventListener('click', () => {
        participant = document.querySelector(".counts p").textContent;
        participant = Number(participant);
        participant = participant + 1;
        document.querySelector(".counts p").textContent = participant;
        localStorage.setItem("participants", participant);
    })
}
participant = localStorage.getItem("participants");

function switchThirdPage() {
    thirdPage.addEventListener('click', () => {
        document.querySelector(".second-window").style.display = "none";
        document.querySelector(".third-window").style.display="block"
        document.querySelector(".third-window .progress-line span:nth-child(3)").classList.add("active");
        document.querySelector(".second-window .progress-line span:nth-child(2)").classList.remove("active");
        creatForm();
    }
)}

function creatForm() {
    let users = document.querySelector(".user-form");
    users.innerHTML+=`
        <p>${participant}</p>
    `
}