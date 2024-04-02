import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { QueriesProvider } from './utils/QueriesContext.jsx';
import Nav from "./components/Nav";
import Form from './components/form';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App(){
  return(
    <div className="w-full h-screen bg-gradient-to-r from-amber-100 to-stone-300/70">
      <ApolloProvider client={client}>
        <QueriesProvider>
          <Nav/>
          {/* <Outlet/> */}
          <Form/>
        </QueriesProvider>
      </ApolloProvider>
    </div>
  )
}