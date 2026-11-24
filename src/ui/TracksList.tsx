import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";

type Props = {
    selectedTrackId: string | null
    onTrackSelected: (id: string | null) => void
}

export function TracksList({selectedTrackId, onTrackSelected}: Props) {
    const {tracks, refresh} = useTracks();

    if (tracks === null) {
        return (
            <div>loading...</div>
        )
    }

    if (tracks.length === 0) {
        return (
            <div>
                <h1>No tracks in your playlist</h1>
            </div>
        )
    }

    const handleResetClick = () => {
        onTrackSelected?.(null)
    }

    const handleRefreshClick = () => {
        refresh()
    }

    const handleClick = (trackId: string) => {
        onTrackSelected?.(trackId)
    }

    return (
        <div>
            <button onClick={handleResetClick}>
                reset
            </button>
            <button onClick={handleRefreshClick}>
                Refresh
            </button>
            <ul>
                {
                    tracks.map((track) => {
                        return (
                            <TrackItem trackInfo={track}
                                       key={track.id}
                                       onSelect={handleClick}
                                       isSelected={track.id === selectedTrackId}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

