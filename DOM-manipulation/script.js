// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const p = document.createElement("p");
// p.style.color = "red";
// p.textContent = "Hey I’m red!";
// container.appendChild(p);

// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I’m a blue h3!";
// container.appendChild(h3);

// const anotherDiv = document.createElement("div");
// anotherDiv.style.border = "1px solid black";
// anotherDiv.style.backgroundColor = "pink";
// container.appendChild(anotherDiv);

// const h1 = document.createElement("h1");
// h1.textContent = "I’m in a div";
// anotherDiv.appendChild(h1);

// const anotherP = document.createElement("p");
// anotherP.textContent = "ME TOO!";
// anotherDiv.appendChild(anotherP);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// })

// function alertFunction() {
//     alert("YAY! you did it")
// }

// btn.onclick = alertFunction
// btn.addEventListener("click", alertFunction);
// btn.addEventListener("click", function(e) {
//     // console.log(e);
//     // console.log(e.target);
//     e.target.style.background = "blue";
// })

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})