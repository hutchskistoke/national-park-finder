let userInput = document.querySelector('#search-field')
let inputButton = document.querySelector('#search')

async function parkResult() {
  let userSearch = userInput.value
  const url = `https://developer.nps.gov/api/v1/parks?q=${userSearch}&api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb`

  console.log(`user search`, userSearch)

  try {
    let response = await axios.get(url)

    let parksArray = response.data.data
    console.log(`parks array: `, parksArray)
    for (let i = 0; i < parksArray.length; i++) {
      let parkName = response.data.data[i].fullName
      if (parkName.includes(`${userSearch}`)) {
        console.log(`actual park`, parkName)
      }
    }

  } catch (error) {
    console.log(error)
  }

}
// parkResult()



inputButton.addEventListener('click', (e) => {
  e.preventDefault()
  let park = document.querySelector('#search-field').value
  parkResult(park)
})
