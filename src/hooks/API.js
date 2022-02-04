import axios from "axios";

export const coinsAPI = axios.get("https://coinranking1.p.rapidapi.com/coins", {
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "71107f9342mshcacdd5efbc08553p1ad984jsnfeb9ff98eec6",
  },
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    tiers: "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "10",
    offset: "0",
  },
});

export const cryptosAPI = axios.get(
  "https://coinranking1.p.rapidapi.com/stats",
  {
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "71107f9342mshcacdd5efbc08553p1ad984jsnfeb9ff98eec6",
    },
  }
);
