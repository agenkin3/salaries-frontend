class IndustryApi {
  
  static baseURL = 'http://localhost:3000/api/v1/industries'
  static getIndustries() {
    fetch(this.baseURL) 
    .then(res => res.json())
    // console log to debug
    //.then(json => console.log(json))
    .then(data => {
      data.forEach(industry => {
        const i = new Industry({id: industry.id, name: industry.name, description: industry.description})
        i.attachToDom()
        
      })
    })
  }
}
// deleteIndustry(id){
//     const configObj = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         }
//     }
    
//     fetch(`${this.baseURL}`, configObj)
//         .then(r => r.json())
//         .then(json => alert(json.message))
// }
// }