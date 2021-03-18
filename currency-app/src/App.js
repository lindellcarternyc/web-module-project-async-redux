import * as api from './api'

import CurrencyForm from './components/CurrencyForm'
import Currencies from './components/Currencies'



export default function App() {
  const onSubmit = (currencies) => {
    console.log('onSubmit:', currencies)
    api.getConversion(currencies)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <CurrencyForm onSubmit={onSubmit} />
      <Currencies currency1={{
        amount: 1,
        curCode: 'USD'
      }}
        currency2={{
          amount: 4,
          curCode:'DEF'
        }}
      />
    </div>
  )
}