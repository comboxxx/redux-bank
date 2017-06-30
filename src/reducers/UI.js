import { SWITCH_PIN_VISIBLE, SWITCH_MODAL_VISIBLE } from '../actions/UI'
import UI from './exampleData/UI'
const reducer = (state = UI, action) => {
    switch (action.type) {

        case SWITCH_PIN_VISIBLE:

            let visiblePin = Object.assign({}, { ...state.pin }, { visible: action.payload })
            let visibleUserInfo = Object.assign({}, { ...state.userInfo }, { visible: !action.payload })
            return Object.assign({}, { ...state }, { pin: visiblePin, userInfo: visibleUserInfo })
        case SWITCH_MODAL_VISIBLE:
            
            let visibleModal = Object.assign({}, { ...state.transactionModal }, { visible: action.payload })

            return Object.assign({}, { ...state }, { transactionModal: visibleModal })

        default:
    }
    return state
}

export default reducer