export const CHANNEL_ACTION = "CHANNEL";

export function joinChannel(channelId, userId) {
    return {
        type: CHANNEL_ACTION,
        meta: { send: true },
        action: 'join',
        id: channelId,
        join_client_id: userId,
        join_timestamp: Date.now()
    }
}