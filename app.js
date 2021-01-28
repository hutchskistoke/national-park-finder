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
      // let wantedResults = response.data.data[i]
      if (parkChosen.includes(userSearch)) {
        console.log(`actual park:`, parkChosen)
        // let wantedResults = response.data.data[i]

        let eachPark = document.createElement('div')
        eachPark.classList.add('individual-parks')

        let addPark = document.querySelector('main')
        addPark.append(eachPark)

        renderPhoto(parksArray[i], eachPark)
        renderWords(parksArray[i], eachPark)

      } else {
        // let error = document.querySelector('main')
        let errorMessage = `<p>You must be lost... <br> Try your search again!</p>`
        let error = document.querySelector('main')
        error.insertAdjacentHTML('afterbegin', errorMessage)
      }
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

  console.log(parkChosen)
  let displayWords = `
  <h2 class='park-name'>${parkChosen.fullName}</h2>
  <p class='park-descripton'>${parkChosen.description}</p>
  `
  wordsContainer.insertAdjacentHTML('afterbegin', displayWords)
  eachPark.append(wordsContainer)


}

function renderPhoto(parkChosen, eachPark) {
  let photoContainer = document.createElement('div')
  photoContainer.classList.add('photo')

  console.log(parkChosen)
  let displayPhoto = `
  <img class='park-photo' src='${parkChosen.images[0].url}' alt='park photo'>
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






