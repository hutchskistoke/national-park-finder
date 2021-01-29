let userInput = document.querySelector('#search-field')
let inputButton = document.querySelector('#search')

// search function 
async function parkResult() {
  let userSearch = userInput.value.toLowerCase()
  const url = `https://developer.nps.gov/api/v1/parks?q=${userSearch}&api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb`
  removeContent()
  try {
    let response = await axios.get(url)

    let parksArray = response.data.data
    // console.log(parksArray)

    for (let i = 0; i < parksArray.length; i++) {
      let parkChosen = response.data.data[i].fullName.toLowerCase()

      if (parkChosen.includes(userSearch)) {
        // console.log(`actual park:`, parkChosen)

        let eachPark = document.createElement('div')
        eachPark.classList.add('individual-parks')

        let addPark = document.querySelector('main')
        addPark.append(eachPark)


        renderWords(parksArray[i], eachPark)
        renderPhoto(parksArray[i], eachPark)

      }
    }
    let check = document.querySelector('main').hasChildNodes()
    if (check !== true) {

      let errorMessage = `<h2 class='uhoh'>You must be lost...  Try your search again!</h2>`
      let uhoh = document.querySelector('main')
      uhoh.insertAdjacentHTML('afterbegin', errorMessage)
    }

  } catch (error) {
    console.log(error)
  }

}
// parkResult()

// display the results

function renderWords(parkChosen, eachPark) {
  let wordsContainer = document.createElement('div')
  wordsContainer.classList.add('words')

  // console.log(parkChosen)
  let displayWords = `
  <h2 class='park-name'>${parkChosen.fullName}</h2>
  <p class='park-descripton'>${parkChosen.description}</p>
  <a href='${parkChosen.url}' target='_blank'>Click here to learn more!</a>
  `
  wordsContainer.insertAdjacentHTML('afterbegin', displayWords)
  eachPark.append(wordsContainer)
}

function renderPhoto(parkChosen, eachPark) {
  let photoContainer = document.createElement('div')
  photoContainer.classList.add('photo')

  console.log(parkChosen)
  let randomNumber = Math.floor(Math.random() * 6)
  let displayPhoto = `
  <img class='park-photo' src='${parkChosen.images[randomNumber].url}' alt='park photo'>
  `
  photoContainer.insertAdjacentHTML('afterbegin', displayPhoto)
  eachPark.append(photoContainer)

}


let enter = document.querySelector('form')
enter.addEventListener('submit', (e) => {
  e.preventDefault()
  let park = document.querySelector('#search-field').value
  parkResult(park)

})

function removeContent() {
  const removeCurrent = document.querySelector('main')
  while (removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)
  }
}






