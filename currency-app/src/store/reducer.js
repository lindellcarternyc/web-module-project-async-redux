const INITIAL_STORE_STATE = {
    conversion: null,
    loading: false,
    error: null
}

export default function reducer(state = INITIAL_STORE_STATE, action) {
    switch (action.type) {
        default: {
            return state
        }
    }
}