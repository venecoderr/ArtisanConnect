import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import Nav from "./components/Nav";
import Form from './components/form';
import { FormProvider } from './utils/FormContext';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App(){
  return(
    <>
      <ApolloProvider client={client}>
        <Nav/>
        <Outlet/>
        <FormProvider>
          <Form/>
        </FormProvider>
      </ApolloProvider>
    </>
  )
}