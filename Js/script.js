// Apparition de la nav bar pour mobile
let lastScroll = 0;
const nav = document.querySelector(".mobile-nav");
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (Math.abs(currentScroll - lastScroll) < 10) return;
  if (currentScroll > lastScroll) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastScroll = currentScroll;
});


  // Fonction qui ouvre un cours

  function openCourse(id) {
    // cacher la loanding page & afficher les cours
    document.querySelector(".landing").style.display = "none";
    document.querySelector("#coursPage").style.display = "block";

    const content = document.querySelector("#coursContent");

    // Affichage dynamique

    if (id === "img") {
     content.innerHTML = `
     <h1>Détection des images manipulées</h1>
     <p>Apprenez à identifier les images retouchées ou sorties de leur contexte grâce à des techniques d'analyse visuelle et d'outils en ligne.</p>
     `;
    }

    if (id === "fact") {
      content.innerHTML = `
      <h1>Fact-checking</h1>
      <p>Découvrez les bases pour vérifier les informations et éviter les fake news sur internet.</p>
      `;
    }


    // else

      // else{
      //   content.innerHTML = `Pas disponible !`
      // }
  }


  openCourse()

  // Function goBack

  function goBack() {
    document.querySelector(".landing").style.display = "block";
    document.querySelector("#coursPage").style.display = "none";
  }