// export const SHOW_USER_MODAL = 'SHOW_USER_MODAL'
export const SWITCH_PIN_VISIBLE = 'SWITCH_PIN_VISIBLE'
export const SWITCH_MODAL_VISIBLE = 'SWITCH_MODAL_VISIBLE'

export function pinVisible(visible) {
    return {
        type: SWITCH_PIN_VISIBLE,
        payload: visible
    }
}

export function modalVisible(visible)
{
    return {
        type:SWITCH_MODAL_VISIBLE,
        payload:visible
    }
}
