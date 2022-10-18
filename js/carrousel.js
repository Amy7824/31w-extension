(function(){
    console.log('carrousel');
    let elmBtnModale = document.querySelector(".btn_modale");
    let elmCarrousel = document.querySelector(".carrousel");
    let elmBtnModaleFermer =document.querySelector(".btn_fermer");
    elmBtnModale.addEventListener('mousedown', function() {
        console.log("bouton boite modale");
        elmCarrousel.classList.add("carrousel--ouvrir");
    });
 ///////////////////////////
 elmBtnModaleFermer.addEventListener('mousedown', function() {
    elmCarrousel.classList.remove("carrousel--ouvrir");
 });

})()