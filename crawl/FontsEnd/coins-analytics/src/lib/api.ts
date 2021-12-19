export const END_POINT = {
  trending: "https://api.coingecko.com/api/v3/search/trending",
  detail: "https://www.coingecko.com/en/coins/",
};

export const getTrending = () => {
  return callApi(END_POINT.trending);
};

const callApi = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
