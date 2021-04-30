class Post {
  static all = []

  static container = document.getElementById('post-list')

  constructor(
    {id, title, salary, details, industryId}
    ){
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
      this.element.addEventListener('click', this.handleItemClick)

      Post.all.push(this)
    }
  
    renderPost(){
      this.element.innerHTML = `
      <div data-id=${this.id}>
          <strong class="title">Job Title: ${this.title}</strong> <br>
          <span class="salary">Salary($): ${this.salary}</span> <br>
          <span class="details">Details: ${this.details}</span> <br>
   
      </div>
      <button class="edit" data-id="${this.id}">Edit</button>
      <button class="delete" data-id="${this.id}">Delete</button>
  `

      return this.element
  }

  attachToDom(){
      
      allposts.appendChild(this.renderPost())
  }
// createEditFields = (editBtn) =>{
//         // now using this to access the element
//         const li = this.element
//         const div = this.element.querySelector('div')

//         // Grab the current values to pre-populate our input fields
//         const name = li.querySelector('.name').innerText
//         const description = li.querySelector('.description').innerText
//         const price = li.querySelector('.price').innerText
        
//         // update the html and interpolate values:
//         div.innerHTML = `
//         <input type="text" name="name" class="edit-name" value="${name}">
//         <input type="text" name="description" class="edit-description" value="${description}">
//         <input type="number" name="price" class="edit-price" min="0" step=".01" value="${price}">
//         `
//     }

//change below 
//add edit and save
  handleItemClick = (e) => {
    if (e.target.innerText === "Delete"){
      this.deleteItem(e)
    }

       
      //     this.deleteItem(e)
    // if (e.target.innerText === "Edit"){
        
    //     this.createEditFields(e.target)

    //     e.target.innerText = "Save"
    // }else if(e.target.innerText === "Delete"){
       
    //     this.deleteItem(e)
    // } else if(e.target.innerText === "Save"){ 
       
    //     this.saveUpdatedItem()

    //     e.target.innerText = "Edit"

  }

  deleteItem = (e) => {
    this.element.remove() //remove element from DOM 
    PostApi.deletePost(this.id) // remove element using API 
  }
//when you click the edit button it will display the edit field with current information prepopulating

  editItem = (e) => {
    const element = this.element
    const div = this.element.querySelector('div')

    const title = element.querySelector('.title')
    const salary = element.querySelector('.salary')
    const details = element.querySelector('.details')
  }
//fix salary and num 
  div.innerHTML = `
  <input type="text" name="title" class="edit-title" value="${title}">
        <input type="text" name="salary" class="edit-salary" value="${salary}">
        <input type="number" name="details" class="edit-details" min="0" step=".01" value="${details}">

  `

  //save item 
  //call function defined in postAPI file that sends information to backend
  saveItem = (e) => {
    const li = this.element
  }
}