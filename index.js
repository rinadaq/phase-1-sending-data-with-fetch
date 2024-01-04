// Add your code here
// helpers.js
function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(response => response.json())
      .then(data => appendIdToDOM(data.id))
      .catch(error => appendErrorToDOM(error.message));
  }
  
  function appendIdToDOM(id) {
    const newElement = document.createElement("div");
    newElement.innerHTML = id;
    document.body.appendChild(newElement);
  }
  
  function appendErrorToDOM(errorMessage) {
    const newElement = document.createElement("div");
    newElement.innerHTML = errorMessage;
    document.body.appendChild(newElement);
  }
  
 
  