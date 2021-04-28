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

      this.element.addEventListener('click', this.handleItemClick)

      Post.all.push(this)
    }
  
    renderLi(){
      this.element.innerHTML = `
      <div data-id=${this.id}>
          <span class="price">${this.title}</span>
          <strong class="name">${this.salary}</strong>:
          <span class="description">${this.details}</span> 
          <span class="industry_id">${this.industryId}</span> 
      </div>
      <button class="edit" data-id="${this.id}">Edit</button>
      <button class="delete" data-id="${this.id}">Delete</button>
  `

      return this.element
  }

  attachToDom(){
      
      allposts.appendChild(this.renderLi())
  }


}