let formSubmit = document.forms[1]
myStorage = window.localStorage
// let sampleData=[]
let nowStorage

// console.log(myStorage)
// var records
formSubmit.addEventListener("submit",(e) => {
  e.preventDefault()
  // console.log({
  //   date: formSubmit["date"].value,
  //   category: formSubmit["category"].value,
  //   description: formSubmit["description"].value,
  //   amount: formSubmit["amount"].value
  // })
  let oddData = JSON.parse(localStorage.getItem('records')) || []

  addData={
    date: formSubmit["date"].value,
    category: formSubmit["category"].value,
    description: formSubmit["description"].value,
    amount: formSubmit["amount"].value
  }
  oddData.push(addData) 

  localStorage.setItem('records', JSON.stringify(oddData))
  // console.log(JSON.stringify(oddData))
  formSubmit["date"].value = ""
  formSubmit["category"].value = ""
  formSubmit["description"].value = ""
  formSubmit["amount"].value = ""
})