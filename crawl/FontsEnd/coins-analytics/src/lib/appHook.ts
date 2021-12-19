import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddressState,
  InitialState,
  setTrendings,
  token,
} from "../redux/addressInfo";
import { getTrending } from "./api";
import { createPieChart, createXYChart } from "./charts";
import dummyData from "../sharks.json";

export const useApp = () => {
  const dispatch = useDispatch();

  const [holders, setHolders] = useState<Array<AddressState>>([]);
  const [topFive, setTopFive] = useState<Array<token>>([]);
  useEffect(() => {
    setHolders(dummyData);
    getTrending().then((data: any) => {
      dispatch(setTrendings(data.coins));
    });
  }, []);

  const handleAdressClick = (item: InitialState) => {
    const pieChartData = item.tokenHolding.tokens.map((item) => {
      if (typeof item.quantity === "string") {
        const quantity = parseFloat(item.quantity);
        item.quantity = quantity;
        return item;
      }
      return item;
    });

    createPieChart("pie_chart", pieChartData);
    // createXYChart("row_chart", item.transactions);
    // console.log(item);
  };

  return { topFive, holders, handleAdressClick };
};
