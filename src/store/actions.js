// Action Types
export const JOIN_CHANNEL = 'JOIN_CHANNEL'

export const EVENTS = [ JOIN_CHANNEL ]

export function joinChannel() {
    return {
      event: 'message',
      handle: NEW_MESSAGE,
    }
  }
  