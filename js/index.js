// const posts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data= await response.json();

//     let card=``;
//     data.forEach((user, index) => {
//         card += `
//         <div>${user.id}</div>
//         <div>${user.title}</div>
//         <div>${user.body}</div>`

//     });
//     document.getElementById("cardPost").innerHTML = card;

// }

// document.addEventListener('DOMContentLoaded', function(){
//     posts();
// });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let cardContainer = document.getElementById("card-container");
        let html = ``;
        data.forEach((user, index) => {
          html += `
    <div class="col-12 col-sm-6 col-lg-4 card-box">
    <div class="card">
      <h4 class="card-header">${"id: "}${user.id}</h4>
      <div class="card-body">
      <h4 class="card-title">${"title: "}${user.title}</h4>
      <p class="card-text">${"body: "}${user.body}</p>
      </div>
    </div>
    </div>
    `;
        });

        cardContainer.innerHTML = html;
      });
  };
});


