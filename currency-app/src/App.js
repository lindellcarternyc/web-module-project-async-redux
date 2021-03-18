import CurrencyForm from './components/CurrencyForm'

export default function App() {
  const onSubmit = (currencies) => {
    console.log('onSubmit:', currencies)
  }

  return (
    <CurrencyForm onSubmit={onSubmit} />
  )
}