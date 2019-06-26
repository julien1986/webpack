import Axios from "axios";

const url = "https://opendata.visitflanders.org/tourist/brands/beer_styles.json?page=1&page_size=500&limit=1";
let json = "";
let list = document.querySelector(".list");

if (localStorage.favoris) {
    var favoris = JSON.parse(localStorage.favoris);
} else {
    var favoris = new Array();
}

Axios.get(url).then(function(response) {
    //console.log(response.data);
    json = response.data;
    json.forEach(element => {
        var found = favoris.find(function(favori) {
            return favori == element.Name_en;
        });
        console.log(found);
        if (!found) {
            list.innerHTML += `<li>${element.Name_en} : ${element.BeerStyle_en} - <a  data-id="${element.Name_en}" href="#">Ajouter au favoris</a></li>`;
        } else {
            list.innerHTML += `<li>${element.Name_en} : ${element.BeerStyle_en} - <a class="favoris" data-id="${element.Name_en}" href="#">Retirer des favoris</a></li>`;
        }
    });

    list.addEventListener("click", function(ev) {
        ev.preventDefault();
        let link = event.target;
        if (link.tagName === "A") {
            var found = favoris.find(function(favori) {
                return favori == link.dataset.id;
            });
            if (!found) {
                favoris.push(link.dataset.id);
                link.classList.add("favoris");
                localStorage.setItem("favoris", JSON.stringify(favoris));
                link.innerHTML = `sortir des favoris`;
            } else {
                favoris.splice(favoris.indexOf(link.dataset.id));
                link.classList.remove("favoris");
                localStorage.setItem("favoris", JSON.stringify(favoris));
                link.innerHTML = "Ajouter aux favoris";
            }
        }
        console.log(favoris);
    });
});
