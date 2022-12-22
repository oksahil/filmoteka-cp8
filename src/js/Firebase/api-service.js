// import axios from "axios";
// import { Loading } from "notiflix";
// import { KEY } from "/src/index";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// export class ApiService {
//   language = localStorage.getItem('language');
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.language;
//     this.id = null;
//     this.genreId = null;
//   }
//   async trendsFetch(allData = false) {
//     try {
//       Loading.pulse({
//         svgColor: 'green',
//       });
//       const { data } = await axios('trending/movie/day', {
//         params: {
//           api_key: KEY,
//           language: this.language,
//           page: this.page,
//         },
//       });
//       Loading.remove();
//       return allData ? data : data.results;
//     } catch {
//       console.log('Error:', error);
//     }
//   }

//   async dynamicFetch() {
//     try {
//       Loading.pulse({
//         svgColor: 'green',
//       });
//       const { data } = await axios('search/movies', {
//         params: {
//           api_key: KEY,
//           language: this.language,
//           query: this.searchQuery,
//         },
//       });
//       Loading.remove();
//       return data.results;
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }
//   async fetchId() {
//     try {
//       Loading.pulse({
//         svgColor: 'green',
//       });
//       const { data } = await axios(`movie/${this.id}`, {
//         params: {
//           api_key: KEY,
//           language: this.language,
//         },
//       });
//       Loading.remove();
//       return data;
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }
//     async fetchTVId() {
//     try {
//       Loading.pulse({
//         svgColor: 'green',
//       });
//       const { data } = await axios(`tv/${Number(this.id)}`, {
//         params: {
//           api_key: KEY,
//           language: this.language,
//         },
//       });
//       Loading.remove();
//       return data;
//     } catch (error) {
//       console.log('Error:', error);
//     }
//     }
//     async fetchGenre() {
//        try {
//          Loading.pulse({
//            svgColor: 'green',
//          });
//          const { data } = await axios(`discover/movie`, {
//            params: {
//                 api_key: KEY,
//                 language: this.language,
//                 with_genres: this.genreId,
//            },
//          });
//          Loading.remove();
//          return data.results;
//        } catch (error) {
//          console.log('Error:', error);
//        } 
//     }
//     async fetchYoutube() {
//         try {
//           Loading.pulse({
//             svgColor: 'green',
//           });
//           const { data } = await axios(`movie/${this.id}/videos`, {
//             params: {
//               api_key: KEY,
//               language: 'en - US',
//             },
//           });
//           Loading.remove();
//           return data.results;
//         } catch (error) {
//           console.log('Error:', error);
//         } 
//     }

//     get query() {
//         return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
//     get movieId() {
//         return this.movieId;
//     }
//     set movieId(newId) {
//         this.movieId = newId;
//     }
// }