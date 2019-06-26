require("normalize.css/normalize.css");
require("./styles/index.scss");

import Axios from "axios";
let url = "https://opendata.visitflanders.org/tourist/brands/beer_styles.json?page=1&page_size=500&limit=1&fbclid=IwAR1hij-RkMGJ1TsBkqpeTsNh_wCQIZ0W3uL8HrRO8qlRYmqGoe8SqDuu5iI";

Axios.get(url)
    .then(function(response) {
        console.log(response);
    })
    .catch(console.log("eror"));

document.addEventListener("DOMContentLoaded", () => {
    const pluginsTriggerElement = document.getElementById("plugins-trigger");
    const pluginsElement = document.getElementById("plugins");

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    };
});
