class Post {
  static all = []
  
  //a constructor is a function that creates an instance of a class which is typically called an object
  //the purpose is to create an object and set values
  constructor(
    {id, title, salary, details, industryId})
      {
      this.id = id
      this.title = title
      this.salary = salary
      this.details = details
      this.industryId = industryId
      //creating a list item HTML element 
      this.element = document.createElement('li')
      //for that element, assign it the ID 
      this.element.id = `post-${id}`
      //what does this line do?
      this.element.dataset.id = id
      //what does this line dd?
      this.element.addEventListener('click', this.handlePostClick)
      Post.all.push(this)
      }
      
  
    renderPost(){
      this.element.innerHTML = `
      <div data-id="${this.id}">
          <strong class="title">Job Title: <span class="title-details">${this.title}</span></strong> <br>
          <span class="salary">Salary($): ${this.salary}</span> <br>
          <span class="details">Details: ${this.details}</span> <br>
   
      </div>
      <button class="edit" data-id="${this.id}" >Edit</button>
      <button class="delete" data-id="${this.id}">Delete</button>
      <button class="save" data-id="${this.id}">Save New</button>
  `

      return this.element
     }   
    
    
     attachToDom(){
        
      allposts.appendChild(this.renderPost())
  }

// //change below 
// //add edit and save
  handlePostClick = (e) => {
    if (e.target.innerText === "Delete"){
      this.deletePost(e)
    }
    else if (e.target.innerText === "Edit") {
      this.editPost(e)
    }
    else if (e.target.innerText === "Create") {
      this.createPost()
    }
  }

deletePost = (e) => {
this.element.remove() //remove element from DOM 
PostApi.deletePost(this.id) // remove element using API 
}
//   //when you click the edit button it will display the edit field with current information prepopulating

  editPost = (e) => {
    const element = this.element
    const div = this.element.querySelector('div')

    const title = element.querySelector('.title-details').innerText
    const salary = element.querySelector('.salary').innerText
    const details = element.querySelector('.details').innerText
  
//fix salary and num 
  div.innerHTML = `
  <label for="post-title">Title:</label> 
  <input type="text" name="title" class="edit-title" value="${title}"> <br>
  <label for="post-salary">Salary:</label>
        <input type="num" name="salary" class="edit-salary" value="${salary}"> <br>
        <label for="post-details">Details:</label>
        <input type="text" name="details" class="edit-details" value="${details}"> <br>
  `
  }
  //save post
  //call function defined in postAPI file that sends information to backend
  saveUpdatedPost = () => {
    this.price = this.element.querySelector(".edit-title").value
    this.name = this.element.querySelector(".edit-salary").value
    this.description = this.element.querySelector(".edit-details").value
    PostApi.createPost(this) // moved fetch to itemApi for separation of concerns
}
//figure out how to name elements, and then grab the correct one
// in CSS a dot is for a class and a hashtag is for an ID 
  createPost = () => {
    console.log("we are here")
    // let container = document.getElementById('post-list')
    // this.title = this.element.querySelector("#new-post-title").value
    // this.salary = this.element.querySelector("#new-post-salary").value
    // this.details = this.element.querySelector("#new-post-details").value
    //console.log('create post function')
    // postApi.savePost(this)
    //PostApi.createPost()
    
  }
}
