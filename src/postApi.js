class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'

  static getPosts() {
    fetch(this.baseURL) 
    .then(res => res.json())
    // console log to debug
    //.then(json => console.log(json))
    .then(data => {
      data.forEach(post => {
        const p = new Post({id: post.id, title: post.title, salary: post.salary, details: post.details, industryId: post.industry_id})
        p.attachToDom()
      })
    })
  }


  static deletePost(id){
    const configObj = {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
    }
    
    fetch(`${this.baseURL}`, configObj)
      .then(r => r.json())
      .then(json => alert(json.message))
  }
}
  /* take user input 
     send to backend to update a given post
  */
//   static editPost(post) {
//     // define a variable called post with the fields title, salary, details
    
//     //deconstruction
//     let {title, salary, details} = post
    
//     const postInfo = {
//       title,
//       salary,
//       details
//     }

//     //this is what we will do with the user input for edit post 
//     const configObj = {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(PostInfo)
//     }
//   }

//   static savePost(post){
//     let {title, salary, detail} = post
//     const postInfo = {
//         title,
//         salary,
//       detail
//     }

//     const configObj = {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(postInfo)
//      }

//     fetch(`${this.baseURL}`, configObj)
//       .then(r => r.json())
//       .then(json => {
//         // we are optomistically rendering here since we don't use the json response
//         post.renderPost()
//       })
//   }
// }
