
const  headers= {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
 }

 const inp = document.querySelector("#inp") as HTMLInputElement;

export function greet(){
    alert(inp.value)
}

export function generateErr(){
    fetch('https://jsonplaceholde.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}