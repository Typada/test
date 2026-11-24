import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailsOutputData} from "../dal/api.ts";

export function useTrackDetail(trackId: string | null) {
    const [trackDetail, setTrackDetail] = useState<GetTrackDetailsOutputData | null>(null);

    useEffect(() => {
        if (!trackId) {
            setTrackDetail(null)
            return;
        }

        getTrack(trackId)
            .then(json => setTrackDetail(json.data))
    }, [trackId])

    return {
        trackDetail: trackDetail
    }
}