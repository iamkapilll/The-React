import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // State to store fetched currency data

  useEffect(() => {
    // Fetch data from API when 'currency' changes
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Failed to fetch currency data:", err));
  }, [currency]);
  console.log(data)
  return data;
}

export default useCurrencyInfo;
