export default function Currencies(props) {
    const { currency1, currency2 } = props
    return (
        <div>
            <p>{currency1.amount} {currency1.curCode}</p>
            <p>{currency2.amount} {currency2.curCode}</p>
        </div>
    )
}