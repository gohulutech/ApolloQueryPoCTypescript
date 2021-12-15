import React from "react";
import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../apollo/queries";
import { ExchangeRate } from "../types/types";

interface Props {
  selectedRate: string | undefined;
}

const ExchangeRates = ({ selectedRate }: Props) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { rate: selectedRate },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data &&
        data.rates
          .filter((rate: ExchangeRate) => rate.name != null)
          .map((rate: ExchangeRate) => (
            <div>
              {rate.name} - {rate.currency} - {rate.rate}
            </div>
          ))}
    </div>
  );
};

export default ExchangeRates;
