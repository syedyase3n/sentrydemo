
const inp = document.querySelector("#inp") as HTMLInputElement;

export function display(){
    alert(inp.value)
}

export function generateErr(){
    fetch('https://jsonplaceholde.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}