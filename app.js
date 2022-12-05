const reviewContainer = document.getElementById('review-container')

// keep the images landscape images
const reviews = [
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        alt: "Profile picture of Indyah Almay",
        text: "I really enjoyed this course! It was fun and interactive as well as educational. I learnt alot!",
        name: "Indyah Almay"
    },
    {
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        alt: "Profile picture of Andrew Ligo",
        text: "A well thought out course with the student in mind. Thanksfor creating this for the community.",
        name: "Andrew Ligo"
    },
    {
        img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        alt: "Profile picture of Cira Enaj",
        text: "I managed to do this course in my spare time after hours and have only positive things to say!",
        name: "Cira Enaj"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}
populateDisplay()

function showCard () {
    this.classList.add('active')
}


function blurCard () {
    this.classList.remove('active')
}
