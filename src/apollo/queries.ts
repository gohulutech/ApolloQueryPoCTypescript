import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates($rate: String!) {
    rates(currency: $rate) {
      currency
      rate
      name
    }
  }
`;
