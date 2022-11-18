export const api = new axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000,
});

export const giphyApi = new axios.create({
  baseURL: "http://api.giphy.com/v1/gifs",
  timeout: 8000,
});
