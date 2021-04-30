class Industry {
  static all = []
  
  static container = document.getElementById('industry-list')
  
  constructor(
    {id, name, description}){
      this.id = id
      this.name = name
      this.description = description
      //creating a list item HTML element
      this.element = document.createElement('li')
      //for that element, assign it the ID
      this.element.id = `industry-${id}`
      //what does this line do?
      this.element.dataset.id = id
  
      this.element.addEventListener('click', this.handleItemClick)
  
      Industry.all.push(this)
    }

     
    renderindustry() {
      this.element.innerHTML = `
      <div data-id= ${this.id}>
          <strong class="title">Name: ${this.name}</strong> <br>
          <span class="salary">Description: ${this.description}</span> <br>
  
      </div>
      <button class="edit" data-id="${this.id}">Edit</button>
      <button class="delete" data-id="${this.id}">Delete</button>
  `
      return this.element
  }
  
  attachToDom(){
      allindustries.appendChild(this.renderindustry())
    }

// class Industry{
//   static all = []
//   static container = document.getElementById('industry-list')

//   constructor(id, name, description){
//     this.id = id
//     this.name = name;
//     this.description = description;

//     //create a list item HTML element
//     this.element = document.createElement('li')

//     //for that element assign it the ID
//     this.element.id = `industry-${id}`

//     //not sure what this line does 
//     this.element.dataset.id = id

//     this.element.addEventListener('click', this.handleItemClick)
//     Industry.all.push(this)
//   }

//   renderIndustry(){
//   this.element.innerHTML = 
//   `<div data-id=${this.id}>`
//  <strong class="title">Name: ${this.name}</strong> <br>
//   <span class="salary">Description ${this.description}</span> <br>
     
//     </div>
//   <button class="edit" data-id="${this.id}">Edit</button>
//   <button class="delete" data-id="${this.id}">Delete</button>
   
//    attachToDom(){
        
// allposts.appendChild(this.renderIndustry())

//   // // createEditFields = (editBtn) =>{
//   // //         // now using this to access the element
//   // //         const li = this.element
//   // //         const div = this.element.querySelector('div')
  
//   // //         // Grab the current values to pre-populate our input fields
//   // //         const name = li.querySelector('.name').innerText
//   // //         const description = li.querySelector('.description').innerText
//   // //         const price = li.querySelector('.price').innerText
          
//   // //         // update the html and interpolate values:
//   // //         div.innerHTML = `
//   // //         <input type="text" name="name" class="edit-name" value="${name}">
//   // //         <input type="text" name="description" class="edit-description" value="${description}">
//   // //         <input type="number" name="price" class="edit-price" min="0" step=".01" value="${price}">
//   // //         `
//   // //     }
//   //   handleItemClick = (e) => {
//   //     if (e.target.innerText === "Edit"){
          
//   //         this.createEditFields(e.target)
  
//   //         e.target.innerText = "Save"
//   //     }else if(e.target.innerText === "Delete"){
         
//   //         this.deleteItem(e)
//   //     } else if(e.target.innerText === "Save"){ 
         
//   //         this.saveUpdatedItem()
  
//   //         e.target.innerText = "Edit"
//   //     }
  
//   //     deleteItem = (e) => {
//   //       this.element.remove() //remove element from DOM 
//   //       ItemApi.deleteItem(this.id) // remove element using API 
//   //   }
//   // }
  
//   // }
//   //render industry instance method

//   // renderIndustry() {
//   //   let IndustriesDiv = document.getElementById("industries-container")

//   //   industriesDiv.innerHTML +=

//   //    <ul>
//   //     <h3>Industry: ${this.name} </h3> 
//   //     <li>Description: ${this.description} </li>
//   //      </ul>
    
//   // }
// }
  }