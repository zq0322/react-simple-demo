import {UPDATE} from '../types/rank'
import {getRankList} from '../../api/rank'

export function update(payload) {
    return function(dispatch) {
        return getRankList().then((result) => {
            return dispatch({
                type: UPDATE,
                payload: result.data.dataList
            })
        })
    }
}