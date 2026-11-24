import {TracksList} from "./ui/TracksList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {useSetTrackId} from "./bll/useSetTrackId.tsx";

export function MainPage() {
    const {trackId, setTrackId} = useSetTrackId();

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id);
    }

    return (
        <div>
            <div className="list-wrapper">
                <TracksList
                    selectedTrackId={trackId}
                    onTrackSelected={handleTrackSelect}/>
                <TrackDetail trackId={trackId}/>
            </div>
        </div>
    )
}

