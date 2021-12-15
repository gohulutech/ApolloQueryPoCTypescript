import React from "react";
import { useQuery } from "@apollo/client";
import { ExchangeRate } from "../types/types";
import { EXCHANGE_RATES } from "../apollo/queries";

interface Props {
  setSelectedRate: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ExchangeRateSelector = (props: Props) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { rate: "USD" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <select onChange={(e) => props.setSelectedRate(e.target.value)}>
      {data &&
        data.rates
          .filter((rate: ExchangeRate) => rate.name != null)
          .map((rate: ExchangeRate) => (
            <option value={rate.currency}>{rate.name}</option>
          ))}
    </select>
  );
};

export default ExchangeRateSelector;
