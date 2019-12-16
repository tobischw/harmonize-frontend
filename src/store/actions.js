export const CHANNEL_JOIN = "CHANNEL/JOIN";

export function joinChannel(channelId, userId) {
    return {
        type: CHANNEL_JOIN,
        meta: { send: true },
        id: channelId,
        join_client_id: userId,
        join_timestamp: Date.now()
    }
}