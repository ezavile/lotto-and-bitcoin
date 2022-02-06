const BASE_URL = "https://api.coingecko.com/api/v3";
const BITCOIN_URL = `${BASE_URL}/coins/bitcoin`;

async function fetchValue(url) {
  let response = await fetch(url);
  response = await response.json();

  return response.market_data?.current_price?.eur;
}

export default class ApiService {
  static async getLatest() {
    const value = await fetchValue(BITCOIN_URL);

    return value;
  }

  static async getHistorical(date) {
    const formattedDate = date.toLocaleDateString("en-IE").split("/").join("-");
    const value = await fetchValue(
      `${BITCOIN_URL}/history?date=${formattedDate}`
    );

    return value;
  }
}
