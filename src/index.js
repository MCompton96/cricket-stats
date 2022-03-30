import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import * as GraphQL from './GraphQL';

ReactDOM.render(
  <ApolloProvider client={GraphQL.client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
