const allposts = document.getElementById("post-list")
const allindustries = document.getElementById("industry-list")
// allposts.addEventListener('click', function(event) {
//   if (event.target.dataset.name === 'alert') {
//     window.alert('HI')
//   } else if (event.target.dataset.name === 'log') {
//     console.log('HI')
//   } else if (event.target.dataset.name === 'error') {
//     console.error('HI')
//   }
// })


IndustryApi.getIndustries()
PostApi.getPosts()
//read = fetch post index

//create - create a new post
  //create a form
  //add an event listener to that form 
  //interrupt its default action interject our own front end capabilities
  //once form is submitted fetch post to my backend
  //do something with the returned object

  //delete - delete a post 

 