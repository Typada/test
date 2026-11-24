import {useEffect, useState} from "react";
import {getTracksList, type TrackListItemResource} from "../dal/api.ts";

export function useTracks() {
    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

    useEffect(() => {
        getTracksList()
            .then(json => setTracks(json.data))
    }, [])

    return {
        tracks: tracks,
        refresh: () => {
            setTracks(null)
            getTracksList()
                .then(json => setTracks(json.data))
        }
    };
}