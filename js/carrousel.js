(function(){
  console.log('carrousel');
  /*---------------------------Initialisation des compteur-----*/
  let index = 0;
  let dernierIndex = -1;
  /*--------------------------------les elements du carrousel*/
  /* Le conteneur principal du carrousel*/
  let elmCarrousel = document.querySelector(".carrousel");
  /*Bouton temporaire pour ouvrir le carrousel*/
  let elmBtnModale = document.querySelector(".btn_modale");
  let elmFlecheGauche = document.querySelector(".fleche.fleche__gauche");
  let elmFlecheDroite = document.querySelector(".fleche.fleche__droite");
  /*Bouton de fermeture du carrousel le X de femeture */ 
  let elmBtnModaleFermer =document.querySelector(".btn_fermer");
  /**figure qui contiendra l'ensemble des images du carrousel */
  let elmCarrousel__figure = document.querySelector(".carrousel__figure");
  /**le formulaire qui contiendra l'ensemble des boutons radio */
  let elmCarrousel__form = document.querySelector(".carrousel__form");

   /*-----------------------------------les elements du galerie*/
  /* Le conteneur principal du galerie*/
  let elmGalerie = document.querySelector(".galerie");
  let elmGalerieImg = document.querySelectorAll(".galerie figure img");

  /**--------------------Étape 1 parcourir les images de la galerie */
  for(const elmImg of elmGalerieImg) {
      //console.log(elmImg.tagName);
      console.log(elmImg.getAttribute("src"));
      elmImg.dataset.index = index;
      console.log(elmImg.dataset.index);
      ajouter_img_carrousel(elmImg)
      ajouter_radio_carrousel();
      //écoutuer sur les images de la galerie
      elmImg.addEventListener("mousedown", function() {
          console.log('galerie');
          console.log(this.dataset.index);
          console.log("elmImg.dataset.index" + this.dataset.index);
          elmCarrousel.classList.add("carrousel--ouvrir");
          elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
          elmCarrousel__form.children[this.dataset.index].checked.true;
      });
  }
  /**
   * Ajoute une image dans le carrousel
   * @param {*} elmImg une image de la galerie
   */

  function ajouter_img_carrousel(elmImg) {
     // elmImg.dataset.index = index;
      //elmImg représente une image de la galerie
      let elmCarrousel__figure__img = document.createElement("img");
      elmCarrousel__figure__img.setAttribute('src',elmImg.getAttribute('src'));
      elmCarrousel__figure__img.classList.add("carrousel__figure__img");
      elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
     
  }

  /**
   * Ajoute un radio bouton dans le carrousel
   */
   function ajouter_radio_carrousel() {
      let elmCarrousel__form__radio = document.createElement('input');
      elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
      elmCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
      elmCarrousel__form__radio.setAttribute('type', 'radio');
      elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio')
      elmCarrousel__form__radio.dataset.index = index;
      index++;
      elmCarrousel__form.appendChild(elmCarrousel__form__radio);
      /**------écouteur sur radio pour afficher une nouvelle image---- */
      elmCarrousel__form__radio.addEventListener('mousedown', function() {
          console.log(this.dataset.index);

          if(dernierIndex != -1) {
              elmCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
          }
          
          elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
          console.log(index);
          dernierIndex= this.dataset.index;
      })
  }

  elmBtnModale.addEventListener('mousedown', function() {
      console.log("bouton boite modale");
      elmCarrousel.classList.add("carrousel--ouvrir");
  });
///////////////////////////
elmBtnModaleFermer.addEventListener('mousedown', function() {
  elmCarrousel.classList.remove("carrousel--ouvrir");
});

//fleche gauche
elmFlecheGauche.addEventListener("click", function () {
  if(dernierIndex != -1 ) {
    elmCarrousel__figure.children.length = dernierIndex;
  }
  elmCarrousel__figure.children[dernierIndex - 1].classList.add("carrousel__figure__img--activer");
  elmCarrousel__figure.children[dernierIndex].classList.remove("carrousel__figure__img--activer");
  elmCarrousel__form.children[dernierIndex - 1].checked = true;
  dernierIndex--;
});

// bouton droit
elmFlecheDroite.addEventListener("click", function () {
 if( dernierIndex != elmCarrousel__figure.children.length - 1) {
    dernierIndex =  dernierIndex;
  }
  elmCarrousel__figure.children[Number(dernierIndex) + 1].classList.add("carrousel__figure__img--activer");
  elmCarrousel__form.children[Number(dernierIndex) + 1].checked = true;
  dernierIndex++;
});
})()