let userInput = document.querySelector('#search-field')
let inputButton = document.querySelector('#search')

// search function 
async function parkResult() {
  let userSearch = userInput.value.toLowerCase()
  const url = `https://developer.nps.gov/api/v1/parks?q=${userSearch}&api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb`
  removePhoto()
  removeWords()
  try {
    let response = await axios.get(url)

    let parksArray = response.data.data
    // console.log(parksArray)
    for (let i = 0; i < parksArray.length; i++) {
      let parkChosen = response.data.data[i].fullName.toLowerCase()
      // let wantedResults = response.data.data[i]
      if (parkChosen.includes(userSearch)) {
        // console.log(`actual park:`, parkChosen)
        // let wantedResults = response.data.data[i]

        renderPhoto(parksArray[i])
        renderWords(parksArray[i])
      }
    }
  } catch (error) {
    console.log(error)
  }

}
parkResult()

// display the results
function renderWords(parkChosen) {
  let wordsContainer = document.querySelector('.words-results')
  console.log(parkChosen)
  let displayWords = `
  <h2 class='park-name'>${parkChosen.fullName}</h2>
  <p class='park-descripton'>${parkChosen.description}</p>
  `
  wordsContainer.insertAdjacentHTML('afterbegin', displayWords)
}

function renderPhoto(parkChosen) {
  let photoContainer = document.querySelector('.photo-result')
  console.log(parkChosen)
  let displayPhoto = `
  <img class='park-photo' src='${parkChosen.images[0].url}' alt='park photo'>
  `
  photoContainer.insertAdjacentHTML('afterbegin', displayPhoto)
}


inputButton.addEventListener('click', (e) => {
  e.preventDefault()
  let park = document.querySelector('#search-field').value
  parkResult(park)
})

function removePhoto() {
  const removeCurrent = document.querySelector('.photo-result')
  while (removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)
  }
}

function removeWords() {
  const removeCurrent = document.querySelector('.words-results')
  while (removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)
  }
}



