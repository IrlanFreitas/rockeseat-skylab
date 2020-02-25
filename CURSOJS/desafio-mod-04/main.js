// const checaIdade = idade => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (idade >= 18) {
//             resolve();
//           } else {
//             reject();
//           }
//     }, 2000)
//   });
// };
// checaIdade(20)
//   .then(function() {
//     console.log("Maior que 18");
//   })
//   .catch(function() {
//     console.log("Menor que 18");
//   });
let input = document.querySelector("input[name='user']");
let lista = document.querySelector("ul");
let loading = document.querySelector("#loading");

const findRepos = () => {

console.log(loading);

loading.style.visibility = "visible";

axios
    .get(`https://api.github.com/users/${input.value}/repos`)
    .then(response => {
      setTimeout(() => {
        generateList(response.data);
      }, 3000);
    })
    .catch(error => {
      console.warn(error);
    })
    .finally(() => {
      loading.style.visibility = "hidden";
    });
};

const generateList = repos => {
  repos.forEach(repo => {
    let li = document.createElement("li");
    let text = document.createTextNode(repo.name);
    li.appendChild(text);
    lista.appendChild(li);
  });
};
