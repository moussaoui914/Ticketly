
const eventCard = document.querySelectorAll(".event-card");
document.querySelector(".second-window .progress-line span:nth-child(1)").classList.add("active");


// eventCard.addEventListener("click" , choseCard)

// eventCard.forEach(card => card.addEventListener('click', choseCard.bind(null, card)))

let titre; let place; let time; let seats; let placeNumber; let price;
for (let cards of eventCard) {
    cards.addEventListener('click', () => {
        choseCard(cards);
        place = cards.querySelector(".second p").firstChild.textContent;
        localStorage.setItem("place", place);
        titre = cards.querySelector(".second h4").textContent;
        localStorage.setItem("titre", titre);
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
let personne = 1;

function switchThirdPage() {
    thirdPage.addEventListener('click', () => {
        document.querySelector(".second-window").style.display = "none";
        document.querySelector(".third-window").style.display = "block"
        document.querySelector(".third-window .progress-line span:nth-child(3)").classList.add("active");
        document.querySelector(".second-window .progress-line span:nth-child(2)").classList.remove("active");
        let formId = 1;
        for (let i = 1; i <= participant; i++) {
            creatForm(formId);
            const form = document.querySelector("#participant-form-" + formId);
            form.style.display = "none";

            personne = i + 1;
            localStorage.setItem("personne", personne);
            personne = localStorage.getItem("personne");
            formId++;
        }
        const firstForm = document.querySelector(".participant-form-container");
        firstForm.style.display = "block";
    }
    )
}
function creatForm(formId) {
    let users = document.querySelector(".user-form");
    // createElement & append
    users.innerHTML += `
                    <section id="participant-form-${formId}" class="participant-form-container">
                    <h3 class="form-title">Add participant information</h3>
                    <div class="form-info">
                        <label for="">First Name</label>
                        <input id="firstName" type="text" placeholder="Enter Your First Name">
                        <label for="">Last Name</label>
                        <input id="lastName" type="text" placeholder="Enter Your Last Name">
                        <label for="">Email</label>
                        <input id="email" type="email" placeholder="Enter Your Email">
                        <label for="">Phone Number</label>
                        <input id="phone" type="text" placeholder="Enter Your Phone Number">
                    </div>
                    <p class="participant-status">Participant ${personne} / ${participant}</p>
                    <button class="confirm-button" onclick="confirmButtonClick(${formId})">Confirm</button>
                </section>
    `
}

let userResume; let firstName; let lastName; let email; let phone; let confirmButton;
let nom; let prenom; let gmail; let tele;

// Initialize an empty array to store all participants
const participants = [];

function confirmButtonClick(formId) {
    const currentForm = document.querySelector("#participant-form-" + formId);
    const nextForm = document.querySelector("#participant-form-" + (formId + 1));

    const firstName = currentForm.querySelector("#firstName").value;
    const lastName = currentForm.querySelector("#lastName").value;
    const phone = currentForm.querySelector("#phone").value;
    const email = currentForm.querySelector("#email").value;

    // Create an object for the current participant
    const participant = {
        nom: lastName,
        prenom: firstName,
        gmail: email,
        tele: phone
    };

    // Save the participant in the array
    participants[formId - 1] = participant;

    // Log to verify
    addResume(firstName,lastName,email,phone);

    // Move to next form if exists
    if (nextForm) {
        currentForm.style.display = "none";
        nextForm.style.display = "block";
    }

}

// userResume=document.querySelector(".user-resume");

function addResume(firstName,lastName,email,tele) {
    let infoPersonne = document.querySelector(".user-resume");

    infoPersonne.innerHTML += `

                    <div class="userResum">
                    <div class="recaputulation">
        <p><b>First Name: </b>${firstName}</p>
        <p><b>LastName Name: </b>${lastName}</p>
        <p><b>Email: </b>${email}</p>
        <p><b>Phone Number: </b>${tele}</p>
                    </div>

                
                    <div class="delete-btn">
                        <button class="delete">Delete</button>
                    </div>
                </div>
    
    `
}