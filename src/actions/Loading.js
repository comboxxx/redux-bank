export const ADD_LOADVALUE = 'ADD_LOADVALUE'
export function addLoadValue(value)
{
    return {
        type:ADD_LOADVALUE,
        payload:value
    }
}