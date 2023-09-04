
//div.setAttribute("class","content");
async function data() {
    let body = document.getElementById("body");


    const get = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await get.json();
    console.log(res);
    res.map(a => {
        let div = document.createElement("div");
        div.setAttribute("class","content")
        div.innerHTML = `
<div class="card-body">
  <h5 class="card-title">Name: ${a.name}</h5>
  <p class="card-subtitle mb-2 text-muted">Email: ${a.email}</p>
  <p class="card-text">Street: ${a.address.street}</p>
  <p class="card-link">City: ${a.address.city}</a>
</div>`
body.append(div);
    }
    );



}
data();


