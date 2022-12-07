const aboutMeButton = document.getElementById('aboutMeButton');
const portfolioButton = document.getElementById('portfolioButton');
const card = document.getElementById('card')
const contact = document.getElementById('contact')

const container = document.getElementById('container')
const portfolio = document.getElementById('portfolio')

const modalMusicPlayer = document.getElementById('modal-musicPlayer')
const modalJamming = document.getElementById('modal-jamming')
const modalAppointment = document.getElementById('modal-appointment')
const modalAdopter = document.getElementById('modal-adopter')

const musicPlayer = document.getElementById('music-player')
const jammming = document.getElementById('jammming')
const appointment = document.getElementById('appointment')
const adopter = document.getElementById('adopter')


const changeToAboutMe = () => {
    card.style.display = 'block';
    contact.style.display = 'block';
    portfolio.style.display = 'none';
}

const changeToPortfolio = () => {
    card.style.display = 'none';
    contact.style.display = 'none';
    portfolio.style.display = 'block';
}

const goBack = () => {
    musicPlayer.style.display = 'none'
    jammming.style.display = 'none'
    appointment.style.display = 'none'
    adopter.style.display = 'none'
}

const displayMusicPlayer = () => {
    musicPlayer.style.display = 'flex'
}

const displayJamming = () => {
    jammming.style.display = 'flex'
}

const displayAppointment = () => {
    appointment.style.display = 'flex'
}

const displayAdopter = () => {
    adopter.style.display = 'flex'
}

modalMusicPlayer.addEventListener('click', displayMusicPlayer)
modalJamming.addEventListener('click', displayJamming)
modalAppointment.addEventListener('click', displayAppointment)
modalAdopter.addEventListener('click', displayAdopter)

aboutMeButton.addEventListener('click', changeToAboutMe)
portfolioButton.addEventListener('click', changeToPortfolio)

musicPlayer.addEventListener('click', goBack)
jammming.addEventListener('click', goBack)
appointment.addEventListener('click', goBack)
adopter.addEventListener('click', goBack)

function Hello () {
    var element = document.getElementById('cardName');
    console.log(element)
}

Hello()