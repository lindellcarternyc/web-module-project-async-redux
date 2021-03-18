import { connect } from 'react-redux'

import CurrencyConversion from './CurrencyConversion'

export const Currencies = (props) => {
    const { loading, conversion } = props
    if (loading) {
        return <p>Loading...</p>
    }

    if (conversion === null) {
        return null
    }

    return (
        <CurrencyConversion conversion={conversion}/>
    )
}

const mapStateToProps = (state) => {
    return {
        conversion: state.conversion,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Currencies)