let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation =() => {
    if (input.value === "")
    {
        msg.innerHTML = "Textarea is empty";
    }
    else{
        msg.innerHTML = "";
        acceptData()
    }
}

let data = {};

let acceptData =() => {
    data["text"] = input.value;
    uploadData()
}

let uploadData =() => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deleteData(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    input.value = "";
}

// function to delete grandparent
let deleteData =(e) => {
    e.parentElement.parentElement.remove();
}