///div class row = liste produit//

////////////////////RECUPERATION DES PRODUITS DEPUIS DE SERVEUR////////////////////////
const getProducts = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch("http://localhost:3000/api/furniture"); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let data = await response.json(); //// on attend la conversion du json en objet////
      console.log(data);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
}; //// appel a getProduct pour envoyer les photos////

getProducts();

////////////////////////AFFICHAGE DES PRODUITS SOUS FORME DE LISTE, injection dans le DOM //////////////
/*const url = "http://localhost:3000/api/furniture";*/

function displayAllProduct(products) {
  ////je me place dans la div productList////
  const productList = document.getElementById("productList");
  console.log(productList);

  products.forEach((product) => {
    ////création du contenu de la div productList////
    productList.innerHTML += `
        <div class="col-lg-4 col-md-6 mb4" >
            <div class="card h-100">
               <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}>
                <div class="card-body"> 
                  <h4 class="card-title">${product.title}</h4>
                  <a class="card-a" href="./produit.html?${product._id}>
               </div>
               <div class="card-footer>
                  <h5 class="card-price">${product.price}</h5>
               </div>
            </div>
        </div>
        `;
  });
}
