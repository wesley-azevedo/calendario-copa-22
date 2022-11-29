console.log('funcionei')
let cardDelay = -.3;

function createCard(date, day, games) {
    cardDelay = cardDelay + 0.3;
    return `
    <div class="card" style="animation-delay: ${cardDelay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
    </div>
    `
}

function createGame(hour, player1, player2) {
    return `
    <li>
        <img src="./assets/icon=${player1}.svg" alt="${player1}">
        <span>${hour}</span>
        <img src="./assets/icon=${player2}.svg" alt="${player2}">
    </li>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard("20/11", "domingo",
    createGame("13:00", "Qatar", "Ecuador"))
    +
    createCard("21/11", "segunda",
    createGame("10:00", "England", "Iran") +
    createGame("13:00", "Senegal", "Netherlands") +
    createGame("16:00", "United States", "Wales"))
    +
    createCard("22/11", "terça",
    createGame("07:00", "Argentina", "Saudi Arabia") +
    createGame("10:00", "Denmark", "Tunisia") +
    createGame("13:00", "Mexico", "Poland") +
    createGame("16:00", "France", "Australia"))
    +
    createCard("23/11", "quarta",
    createGame("07:00", "Morocco", "Croatia") +
    createGame("10:00", "Germany", "Japan") +
    createGame("13:00", "Spain", "Costa Rica") +
    createGame("16:00", "Belgium", "Canada"))
    +
    createCard("24/11", "quinta",
    createGame("07:00", "Switzerland", "Cameroon") +
    createGame("10:00", "Uruguay", "South Korea") +
    createGame("13:00", "Portugal", "Ghana") +
    createGame("16:00", "Brazil", "Serbia"))
    +
    createCard("25/11", "sexta",
    createGame("07:00", "Wales", "Iran") +
    createGame("10:00", "Qatar", "Senegal") +
    createGame("13:00", "Netherlands", "Ecuador") +
    createGame("16:00", "England", "United States"))
    +
    createCard("26/11", "sábado",
    createGame("07:00", "Tunisia", "Australia") +
    createGame("10:00", "Poland", "Saudi Arabia") +
    createGame("13:00", "France", "Denmark") +
    createGame("16:00", "Argentina", "Mexico"))
    +
    createCard("27/11", "domingo",
    createGame("07:00", "Japan", "Costa Rica") +
    createGame("10:00", "Belgium", "Morocco") +
    createGame("13:00", "Croatia", "Canada") +
    createGame("16:00", "Spain", "Germany"))
    +
    createCard("28/11", "segunda",
    createGame("07:00", "Cameroon", "Serbia") +
    createGame("10:00", "South Korea", "Ghana") +
    createGame("13:00", "Brazil", "Switzerland") +
    createGame("16:00", "Portugal", "Uruguay"))
    +
    createCard("29/11", "terça",
    createGame("12:00", "Ecuador", "Senegal") +
    createGame("12:00", "Netherlands", "Qatar") +
    createGame("16:00", "Iran", "United States") +
    createGame("16:00", "Wales", "England"))
    +
    createCard("30/11", "quarta",
    createGame("12:00", "Tunisia", "France") +
    createGame("12:00", "Australia", "Denmark") +
    createGame("16:00", "Poland", "Argentina") +
    createGame("16:00", "Saudi Arabia", "Mexico"))
    +
    createCard("01/12", "quinta",
    createGame("12:00", "Croatia", "Belgium") +
    createGame("12:00", "Canada", "Morocco") +
    createGame("16:00", "Japan", "Spain") +
    createGame("16:00", "Costa Rica", "Germany"))
    +
    createCard("02/12", "sexta",
    createGame("12:00", "South Korea", "Portugal") +
    createGame("12:00", "Ghana", "Uruguay") +
    createGame("16:00", "Serbia", "Switzerland") +
    createGame("16:00", "Cameroon", "Brazil"))
