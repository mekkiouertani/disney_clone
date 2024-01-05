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
    // to pass params of the research
    //num: 20,
    // offset: 0,
    api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
    language: "it-IT",
    query: "",
  },

  foundSeries: [],
  foundMovies: [],
  WeekmovieArr: [],
  PopularmovieArr: [],
  SearchMovieSerie: [],
  CreditsArr: [],
  IdInfoCard: [],
  SlideInfo: [], //passiamo l'oggetto di IdInfoCard al componente HeroSlider
  showCard: false,
  showSearch: false,
  showCardWrapper: true,
  showLogosCard: false,
  currentFlag: "",
  selectedLogosCard: null,

  mainArr: [],

  imgOriginalPath: "https://image.tmdb.org/t/p/original",
  imgBackdropPath: "https://image.tmdb.org/t/p/w342",

  disneyMoviesArr: [],
  disneySeriesArr: [],
  pixarMoviesArr: [],
  pixarSeriesArr: [],
  marvelMoviesArr: [],
  marvelSeriesArr: [],
  starwarsMoviesArr: [],
  starwarsSeriesArr: [],
  nationalMoviesArr: [],
  nationalSeriesArr: [],
  starMoviesArr: [],
  starSeriesArr: [],
});
