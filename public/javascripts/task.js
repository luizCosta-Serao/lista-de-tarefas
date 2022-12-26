const setTagAsDone = async (element, id) => {
  let headers = new Headers({"Content-Type":"application/json"})
  let body = JSON.stringify({task: {done: element.checked}})
  let response = await fetch(`/tasks/${id}?_method=put`, {headers: headers, body: body, method: "PUT"})
  let data = await response.json()
  let task = data.task
  
  try {
    let parent = element.parentNode
    let child = element.nextElementSibling
    if(task.done) {
      element.checked = true
      parent.style.color = "green"
      parent.classList.add("is-italic")
    } else {
      element.checked = false
      parent.style.color = ""
      parent.classList.remove("is-italic")
    }
    
  } catch (error) {
    alert("Erro ao atualizar a tarefa")
  }
}