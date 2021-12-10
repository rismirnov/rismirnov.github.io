
export default function appReducer(state = {period: 1, startDate: 1}, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {

        case 'period/setPeriod':
            {
                return {...state, period: +action.payload}
            }
        case 'period/setStartDate':
            {
                return {...state, startDate: +action.payload}
            }

        default:
            return state
    }
}