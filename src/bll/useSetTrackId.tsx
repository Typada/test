import {useState} from "react";

export const useSetTrackId = () => {
    const [trackId, setTrackId] = useState<string | null>(null);

    return {
        trackId,
        setTrackId,
    }
}