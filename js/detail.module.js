import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });

    this.loading = document.querySelector(".loading");


    this.getDetails(id);
  }

  async getDetails(id) {
    this.loading.classList.remove("d-none")
    const url =
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "89e7e215d3msh8fcab8910e145ddp1410a8jsn3c12966c589c",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(url, options);
    const response = await api.json();
    this.loading.classList.add("d-none")

    console.log(response);
    
    new Ui().displayDetails(response);
  }
}

/*

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
      });
    });
  }


*/
