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
        headers: {
            'api-key': '836f2ff8-5d64-4477-8179-4a059623cee7'
        }
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
        headers: {
            // 'api-key': '836f2ff8-5d64-4477-8179-4a059623cee7'
        }
    }).then(res => res.json())

    return promise;
}