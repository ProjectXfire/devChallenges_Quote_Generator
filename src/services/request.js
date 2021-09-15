export const getOneRandom = async () => {
  const response = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );
  const quote = await response.json();
  return quote.data[0];
};

export const getList = async (query = "") => {
  const response = await fetch(
    `https://quote-garden.herokuapp.com/api/v3/quotes?${query}`
  );
  const list = await response.json();
  return list.data;
};
