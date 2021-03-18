import { useState } from 'react'

import { InputDivStyles, InputLabelStyles, InputStyles } from './styles'

const CurrencyConversion = (props) => {
    const [conversion, setConversion] = useState(() => {
        return {
            currency1: {
                code: props.conversion.base.code,
                amount: 1
            },
            currency2: {
                code: props.conversion.rate.code,
                amount: props.conversion.rate.amount
            }
        }
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target

        let currency1Amount
        let currency2Amount
        
        if (name === 'currency1') {
            currency1Amount = parseFloat(value)
            currency2Amount = currency1Amount * props.conversion.rate.amount
        } else if (name === 'currency2') {
            currency2Amount = parseFloat(value)
            currency1Amount = currency2Amount / props.conversion.rate.amount
        }

        setConversion(current => {
            return {
                currency1: {
                    code: current.currency1.code,
                    amount: currency1Amount
                },
                currency2: {
                    code: current.currency2.code,
                    amount: currency2Amount
                }
            }
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{...InputDivStyles, marginBottom: '0.5rem'}}>
                <label style={InputLabelStyles} htmlFor="currency1">{conversion.currency1.code}</label>
                <input style={InputStyles} type="number" value={conversion.currency1.amount} onChange={handleChange} name="currency1" />
            </div>
            <div> = </div>
            <div style={{...InputDivStyles, marginTop: '0.5rem'}}>
                <label style={InputLabelStyles} htmlFor="currency2">{conversion.currency2.code}</label>
                <input 
                    style={InputStyles}
                    type="number"
                    value={conversion.currency2.amount}
                    onChange={handleChange}
                    name="currency2"
                    id="currency2"
                />
            </div>
        </div>
    )
}

export default CurrencyConversion