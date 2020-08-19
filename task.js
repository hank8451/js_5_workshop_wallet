let formSubmit = document.forms[1]
formSubmit.addEventListener("submit",(e) => {
  e.preventDefault()
  
  console.log({
    date: formSubmit["date"].value,
    category: formSubmit["category"].value,
    description: formSubmit["description"].value,
    amount: formSubmit["amount"].value
  })
  formSubmit["date"].value = ""
  formSubmit["category"].value = ""
  formSubmit["description"].value = ""
  formSubmit["amount"].value = ""
})