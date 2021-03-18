import CurrencyForm from './components/CurrencyForm'
import Currencies from './components/Currencies'

export default function App() {
  const onSubmit = (currencies) => {
    console.log('onSubmit:', currencies)
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