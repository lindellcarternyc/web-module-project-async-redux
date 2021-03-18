import React, { useState } from 'react'
import { CURRIENCIES  } from '../constants/curreny-codes'

const CURRENCY_1_OPTIONS = Object.keys(CURRIENCIES).sort()

const INITIAL_FORM_VALUES = {
    currency1: '',
    currency2: ''
}

export default function CurrencyForm(props) {
    const { onSubmit } = props
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)

    const isValid = () => {
        return formValues.currency1 && formValues.currency2
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        onSubmit(formValues)
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target

        return setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    const getCurrency1Options = () => {
        return CURRENCY_1_OPTIONS.map(curCode => (
            <option key={curCode} value={curCode}>{curCode}</option>
        ))
    }

    const getCurrency2Options = () => {
        return CURRENCY_1_OPTIONS.filter(curCode => curCode !== formValues.currency1)
            .map(curCode => {
                return (
                    <option key={curCode} value={curCode}>{curCode}</option>
                )
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="currency1">Currency 1: </label>
            <select onChange={handleChange} id="currency1" name="currency1" value={formValues.currency1}>
                <option value="">---</option>
                {getCurrency1Options()}
            </select>
            <label htmlFor="currency2">Currency 2:</label>
            <select onChange={handleChange} id="currency2" name="currency2" value={formValues.currency2}>
                <option value="">---</option>
                {getCurrency2Options()}
            </select>
            <button type="submit" disabled={!isValid()}>Get Rate</button>
        </form>
    )
}