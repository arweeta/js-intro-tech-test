import { cards } from "./data/cardsData.js";

const cardContainer = document.querySelector(".card-container")
const allCardsButton = document.querySelector("#all-cards-button")
const heartsButton = document.querySelector("#hearts-button")



const onAllCardsButtonPress = () => {
    cards.forEach((card) => {
        // const colour =
        //     if (card.colour) {

        //     }
        cardContainer.innerHTML +=
            (`<div class="card">
            <div class="card__heading"><h1>${card.value} of ${card.symbol}</h1></div>
            <div class="card__description"><p>The ${card.value} of ${card.suit}</p></div>
            </div>`);
    });
}

allCardsButton.addEventListener("click", onAllCardsButtonPress)

const onHeartButtonPress = () => {
    cards.forEach((card) => {
        if (card.colour == "red") {
            cardContainer.innerHTML +=
                (`<div class="card">
                            <div class="card__heading"><h1>${card.value} of ${card.symbol}</h1></div>
                            <div class="card__description"><p>The ${card.value} of ${card.suit}</p></div>
                            </div>`);
        }

    })
}

heartsButton.addEventListener("click", onHeartButtonPress)