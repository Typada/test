const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
        return undefined;
    }
    return {
        'api-key': apiKey
    }
}

export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
    }
}

export type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}


export type AttachmentDto = {
    url: string
}

export type TrackListItemAttachments = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemAttachments
}

export type GetTrackListOutput = {
    data: TrackListItemResource[]
}

export const getTracksList = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise;
}