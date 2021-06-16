class Post {
  static all = []
  
  constructor(
    {id,title, salary, details, industry_id})
      {
      
      this.title = title
      this.salary = salary
      this.details = details
      this.industry = industry
      this.id = id
      // this.industry_id.name = industry
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
            <span class="industry">Industry: ${this.industry.value}</span> <br>
            <span class="id">PostID: ${this.element.id}</span> <br>
        </div>
        <button class="delete" data-id="${this.id}">Delete</button>`
  
        return this.element
       }   
        
     attachToDom(){
      allposts.appendChild(this.renderPost())
  }
//change
    handlePostClick = (e) => {
      if (e.target.innerText === "Delete"){
        this.deletePost(e)
      }
      else if (e.target.innerText === "Edit") {
        this.editPost()
      }
    }
    deletePost = (e) => {
      this.element.remove() //remove element from DOM 
      PostApi.deletePost(this.element.dataset.id) // remove element using API 
    }
//   //when you click the edit button it will display the edit field with current information prepopulating

    // static editPost = (e) => {
    //   const element = this.element
    //   const div = this.element.querySelector('div')
    //   const title = element.querySelector('.title-details').innerText
    //   const salary = element.querySelector('.salary').innerText
    //   const details = element.querySelector('.details').innerText
    // }

     static createPost = (e) => {
      let title = document.querySelector("#new-post-title").value
      let salary = document.querySelector("#new-post-salary").value
      let details = document.querySelector("#new-post-details").value
      let industry = document.getElementById("industry").value
      PostApi.createPost(title, salary, details, industry)
    }
}