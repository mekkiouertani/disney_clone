import { reactive } from 'vue'

export const store = reactive({
    BaseAPI: "https://api.themoviedb.org/3/",

    endPoint: {
        popularMovie: "movie/popular",
        popularOfWeek: "trending/tv/week",
        creditsTV: "tv/84958/credits"
    },
    params: {
        api_key: "2685b6a8f123b29cd4c75c4bd228e18e",
        // query: "netflix",
        num: 20,
        // offset: 0,
        language: "it-IT",

    },
    WeekmovieArr: [],
    PopularmovieArr: [],
    CreditsArr: []
})