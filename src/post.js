class Post {
  static all = []

  static container = document.getElementById('post-list')
  
  constructor(
    {id, title, salary, detail, industry_id}
    ){
      this.id = id
      this.title = title
      this.salary = salary
      this.detail = detail
      this.industry_id = industry_id
      //creating a list item HTML element 
      this.element = document.createElement('li')
      //for that element, assign it the ID 
      this.element.id = `post - $(id}`
      //what does this line do?
      this.element.dataset.id = id

      this.element.addEventListener('click', this.handleItemClick)

      Post.all.push(this)
    }
  // my next function


}