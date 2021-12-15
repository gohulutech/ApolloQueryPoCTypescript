import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ExchangeRates from "./components/ExchangeRates";
import ExchangeRateSelector from "./components/ExchangeRateSelector";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

interface Props {}

export const App: React.FC = (props: Props) => {
  const [selectedRate, setSelectedRate] = useState<string | undefined>("USD");

  return (
    <ApolloProvider client={client}>
      <ExchangeRateSelector setSelectedRate={setSelectedRate} />
      <ExchangeRates selectedRate={selectedRate} />
    </ApolloProvider>
  );
};
