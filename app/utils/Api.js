import axios from 'axios'

function getProduct(id){
  // return axios.get(``);

  return {
      name: "Oculus Rift",
      description: "Wonderful virtual reality experience",
      price: 49999,
      image_url: "https://tctechcrunch2011.files.wordpress.com/2015/06/oculus-rift-consumer-edition.png",
      variants: [
		    {
		      "id": "vrnt_p6dP5g0M4ln7kA",
		      "name": "Color",
		      "options": [
		        {
		          "id": "optn_jVKXmwD47wrgDA",
		          "name": "Red",
		          "price": 100,
		          "quantity": 0
		        },
		        {
		          "id": "optn_PLvJjoPKnwe0nO",
		          "name": "Blue",
		          "price": 100,
		          "quantity": 0
		          
		        }
		      ]
		    },
		    {
		      "id": "vrnt_G6kVw73vaw2eDx",
		      "name": "Size",
		      "options": [
		        {
		          "id": "optn_DeN1ql93doz3ym",
		          "name": "Small",
		          "price": 100,
		          "quantity": 0
		        },
		        {
		          "id": "optn_YgnZO5kqKw7MNq",
		          "name": "Medium",
		          "price": 100,
		          "quantity": 0
		         
		        },
		        {
		          "id": "optn_p7ZAMo1XQwNJ4x",
		          "name": "Large",
		          "price": 100,
		          "quantity": 0
		        }
		      ]
		    }
		  ]
  };
}

export default {
	getProduct: function(id) {
	  // return axios.all([getInfo(username), getProductInfo(username)])
	  //   .then((arr) => ({repos: arr[0].data,bio: arr[1].data}))

	  return getProduct(id)
	}
}
