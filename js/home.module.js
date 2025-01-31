import { Details } from "./detail.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);

        const category = link.dataset.category;
        console.log(category);

        this.getGames(category);
      });
    });

    this.loading = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");

    this.ui = new Ui();
    this.detailsSection = new Details()

    this.getGames("mmorpg");
  }

  async changeActiveLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  async getGames(cat) {
    this.loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "89e7e215d3msh8fcab8910e145ddp1410a8jsn3c12966c589c",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(url, options);
    const response = await api.json();
    this.loading.classList.add("d-none");

    this.ui.displayGames(response);

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        
        this.details.classList.remove("d-none")
        this.games.classList.add("d-none")
        new Details(card.dataset.id) 
      });
    });
  }
}
