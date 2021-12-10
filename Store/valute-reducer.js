const initialState = []

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {

        case 'valutes/setValutes':
            {
                return action.payload
            }

        case 'valutes/setValuteColor':
            {
                return state.map(valute => {
                    if (valute.charCode == action.payload.charCode) {
                        valute.color = action.payload.color
                    }
                    return valute
                })
            }

        case 'valutes/toggleValuteVisible':
            {
                return state.map(valute => {
                    if (valute.charCode == action.payload) {
                        valute.checked = !valute.checked
                    }
                    return valute
                })
            }

        default:
            return state
    }
}