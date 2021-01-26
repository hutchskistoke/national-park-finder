let userInput = document.querySelector('#search-field')
let inputButton = document.querySelector('#search')

async function parkResult() {
  let userSearch = userInput.value
  const url = `https://developer.nps.gov/api/v1/parks?q=${userSearch}&api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb`

  console.log(`user search`, userSearch)

  try {
    let response = await axios.get(url)
    console.log(`inside try: `, response)
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
