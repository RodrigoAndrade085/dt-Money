import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de App',
          type: 'deposit',
          category: 'Dev',
          amount: 6200,
          createdAt: new Date('2022-02-27 09:00:00'),
        },
        {
          id: 2,
          title: 'Conta de luz',
          type: 'withdraw',
          category: 'Contas',
          amount: 520,
          createdAt: new Date('2022-02-10 15:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })
    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)
     return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
