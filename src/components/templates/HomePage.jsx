import { useEffect, useState } from "react";
import { getCoinList } from "../../services/cryptoApi";

import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(getCoinList());
      const json = await response.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
