let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
    console.log("Button");
});

let formValidation =() => {
    if (input.value === "")
    {
        console.log("Failure");
    }
    else{
        console.log("Success");
    }
}