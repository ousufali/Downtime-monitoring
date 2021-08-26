import axios from 'axios'

const baseUrl = 'http://localhost:4000/api/'


const testUrl = async (url) => {
  const response = await axios.get(baseUrl + url)
  console.log("..................")
  console.log(response)
  console.log("................")

  return response
}

const testUrl1 = async (url) => {
  const response = await axios.get(baseUrl + url)
  console.log("..................")
  console.log(response)
  console.log("................")

  return response
}



export default  { testUrl }