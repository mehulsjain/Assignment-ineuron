const api_url =
      "https://jsonplaceholder.typicode.com/posts?userId=10";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML
function show(data) {
    let tab;
    console.log(data)
    // Loop to access all rows
    for (let r of data) {
        tab += `<div class="post">
        <div class="title">${r.title}</div>
        <div class="description">${r.body}</div>
        </div>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("posts").innerHTML = tab;
}