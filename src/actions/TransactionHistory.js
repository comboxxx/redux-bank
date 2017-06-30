import { addLoadValue } from './Loading'
import _ from 'lodash'
import {transactionHistoryRef} from '../firebaseRef'

export const FETCH_HISTORY = "FETCH_HISTORY"

export function transactionHistory(accountNumber) {


    return (dispatch, getState) => {
        // dispatch(addLoadValue(1))
        transactionHistoryRef.orderByChild("accountNumber").equalTo(accountNumber).on('value', (snapshot) => {

            let histories = snapshot.val();
            let history_computed = _.map(histories, (history, key) => {

                history.key = key;

                return history
            })
            // dispatch(addLoadValue(-1))


            dispatch({
                type: FETCH_HISTORY,
                payload: history_computed
            })
        })
    }
}