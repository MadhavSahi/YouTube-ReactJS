const API_KEY = "AIzaSyDkLpk0NbCvOoRGazBrzkV4FvQ0qk-ABzE";
const search_word = "";

const YOUTUBE_API_KEY_TOP_50 =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_WORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
  search_word +
  "&key=" +
  API_KEY;

export const suggestion_search_fxn = async (searched_string) => {
  const videos_result = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
      searched_string +
      "&key=" +
      API_KEY
  );
  const jsonVideoData = await videos_result.json();
  return jsonVideoData;
};

export default YOUTUBE_API_KEY_TOP_50;
