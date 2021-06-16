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
  
      Industry.all.push(this)
    }

    renderIndustry() {
      this.element.innerHTML = `
          <div data-id= ${this.id}>
          <strong class="name"> Name: ${this.name} </strong> <br>
          <span class="description"> Description: ${this.description}</span> <br>
          <span class="description"> Industry ID: ${this.id}</span> <br>
          </div>`    
      return this.element
    }
    attachToDom() {
    allindustries.appendChild(this.renderIndustry())
    }
}

//for dropdown
//the same way that i added list items to the list
//for posts, add dropdown items to the dropdown for industries
//then have a dropdown that includes the same industries many times
//