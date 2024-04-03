import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { QueriesProvider } from './utils/QueriesContext.jsx';
import Nav from "./components/Nav";
import Form from './components/form';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
})

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App(){
  return(
    <div className="w-full h-screen bg-gradient-to-r from-amber-100 to-stone-300/70">
      <ApolloProvider client={client}>
        <QueriesProvider>
          <Nav/>
           {/* <Form formType={'login'}/> */}
          <Outlet/>
        </QueriesProvider>
      </ApolloProvider>
    </div>
  )
}