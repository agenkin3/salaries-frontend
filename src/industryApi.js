class IndustryApi {
  static baseURL = 'http://localhost:3000/api/v1/industries'
  
  static getIndustries() {
    fetch(this.baseURL) 
      .then(res => res.json())
      .then(data => {
        data.forEach(industry => {
          const i = new Industry({id: industry.id, name: industry.name, description: industry.description})
          i.attachToDom()
        })
    })
  }

  
}

