document.getElementById("submit").addEventListener("click", () => {
    let pass = document.getElementById("password").value
    let password = "FalconsMC"
    if (pass == password){
      document.getElementById("lesson-plans").classList.remove("hide")
      document.getElementById("initial").classList.add("hide")
    }
  })