// import REACT_APP_API_KEY from "./config2";

// const API_KEY = "AIzaSyDkLpk0NbCvOoRGazBrzkV4FvQ0qk-ABzE";

// const YOUTUBE_API_KEY_TOP_50 =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
// process.env.REACT_APP_API_KEY;
// const API_KEY = "AIzaSyBPsE4Gw1EYFk5y0DzQsauafMt_zWsz38E";

const search_word = ""
const YOUTUBE_API_KEY_TOP_50 =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_WORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
  search_word +
  "&key=" +
  process.env.REACT_APP_API_KEY;

export const suggestion_search_fxn = async (searched_string) => {
  const videos_result = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
      searched_string +
      "&key=" +
      process.env.REACT_APP_API_KEY
  );
  const jsonVideoData = await videos_result.json();
  return jsonVideoData;
};

export default YOUTUBE_API_KEY_TOP_50;
