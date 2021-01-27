let userInput = document.querySelector('#search-field')
let inputButton = document.querySelector('#search')

// search function 
async function parkResult() {
  let userSearch = userInput.value.toLowerCase()
  const url = `https://developer.nps.gov/api/v1/parks?q=${userSearch}&api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb`

  try {
    let response = await axios.get(url)

    let parksArray = response.data.data
    // console.log(parksArray)
    for (let i = 0; i < parksArray.length; i++) {
      let parkChosen = response.data.data[i].fullName.toLowerCase()
      if (parkChosen.includes(userSearch)) {
        // console.log(`actual park:`, parkChosen)
        renderResults(parkChosen)
      }
    }
  } catch (error) {
    console.log(error)
  }

}
parkResult()

// display the results
function renderResults(parkChosen) {
  let resultsContainer = document.querySelector('.results')

  let displayPark = `
  <h2 class='park-name'>${parkChosen}</h2>
  <img src='${parkChosen.images[0]}' alt='park photo'>
  `


  resultsContainer.insertAdjacentHTML('afterbegin', displayPark)

}


inputButton.addEventListener('click', (e) => {
  e.preventDefault()
  let park = document.querySelector('#search-field').value
  parkResult(park)
})


