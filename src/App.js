import React, { useState } from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";
import { NavBar } from "./Components/navbar";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql"
    }),
]);

const client = new ApolloClient({
  link: link,
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
});

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>1</h1>
    </div>
    /*
    <ApolloProvider client={client}>
      {" "}
      { <GetUsers /> }
      <Form />
    </ApolloProvider>*/
  );
}

export default App;
