import { reactive } from "vue";

export const store = reactive({
  BaseAPI: "https://api.themoviedb.org/3/",
  movieID: "84958",
  endPoint: {
    popularMovie: "movie/popular",
    popularOfWeek: "trending/tv/week",
    creditsMovie: "movie/",
    creditsTV: "tv/",
    endCreditsTV: "/credits",
    searchSeries: "search/tv",
    searchMovies: "search/movie",
  },
  params: {
    api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
    // to pass params of the research
    query: "",
    num: 20,
    // offset: 0,
    language: "it-IT",
  },

  foundSeries: [],
  foundMovies: [],
  WeekmovieArr: [],
  PopularmovieArr: [],
  CreditsArr: [],
  IdInfoCard: [],
  SlideInfo: [],
  showCard: false,

  imgOriginalPath: "https://image.tmdb.org/t/p/original",
  imgBackdropPath: "https://image.tmdb.org/t/p/w342",
});
