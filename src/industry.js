class Industry {
  static all = []
  
  static container = document.getElementById('industry-list')
    constructor({
      id, name, description}){
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
          <strong class="title"> ${this.name}</strong> <br>
          <span class="salary">Description: ${this.description}</span> <br>
  
          </div>
          <button class="view" data-id="${this.id}">View</button>
  `      
  }

    attachToDom() {
    allindustries.appendChild(this.renderindustry())
  }}