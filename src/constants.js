const API_KEY = "AIzaSyAUiOvBmxxjE72eqEoVq2dvRvG03VUyxj8"
export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+ API_KEY;
//export let YOUTUBE_VIDEO_BY_ID = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id={id}&key=`+API_KEY;
export const YOUTUBE_AUTO_SUGGESTIONS_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const OFFSET_LIVE_CHAT =10;
export const YOUTUBE_VIDEO_BY_QUERY = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q={}&type=video&key="+ API_KEY;



