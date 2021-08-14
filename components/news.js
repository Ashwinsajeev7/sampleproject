const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=bf140da4523d4f85b2cedfbc72085abf";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}