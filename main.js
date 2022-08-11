const xhr = new XMLHttpRequest();
const source = "https://jsonplaceholder.typicode.com/posts";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < response.length; i++) {
      output += `
        <div class="box">
            <div class="content">
                <p class="user">User - ${response[i].userId}</p>
                <p class="title">${response[i].title}</p>
                <p class="body">${response[i].body}</p>
            </div>
        </div>`;
    }
    document.querySelector(".container-ajax").innerHTML = output;
  }
};
xhr.send();
