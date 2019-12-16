export const CHANNEL_JOIN = "CHANNEL/JOIN";
export const SONG_VOTE = "SONG/VOTE";

export function joinChannel(channelId, userId) {
    return {
        type: CHANNEL_JOIN,
        meta: { send: true },
        id: channelId,
        join_client_id: userId,
        join_timestamp: Date.now()
    };
}

export function voteSong(clientId, songId) {
    return {
        type: SONG_VOTE,
        meta: { send: true },
        songId: songId,
        clientId: clientId
    };
}
