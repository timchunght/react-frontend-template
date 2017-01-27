import axios from 'axios'

function getInfo(username){
  return axios.get(``);
}

function getProductInfo(username){
  return axios.get(``);
}

export default function getProductInfo(username){
  return axios.all([getInfo(username), getProductInfo(username)])
    .then((arr) => ({repos: arr[0].data,bio: arr[1].data}))
}
