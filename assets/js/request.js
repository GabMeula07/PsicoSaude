const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 || xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

const indice = document.querySelector(".salas");
indice.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  
  if (tag === "a") {
    e.preventDefault();
    carregaSala(el);
  }
});

async function carregaSala(el) {
  const href = el.getAttribute("href");
  const objConfig = {
    method: "GET",
    url: href,
  };

  try{
    const resultado = await request(objConfig);
    carregaResultado(resultado);
  }catch(erro){
    console.log(erro)
  }
}
function carregaResultado(resultado){
    const container = document.querySelector('#request');
    container.innerHTML = resultado;
}
