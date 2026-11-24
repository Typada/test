import {useTrackDetail} from "../bll/useTrackDetail.tsx";
import styles from './TrackDetail.module.css'

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {

    const {trackDetail} = useTrackDetail(trackId);

    return (
        <div className={styles.details}>
            <h3>Details</h3>

            <div>
                {trackId === null ?
                    'Not selected tracks' :
                    !trackDetail || trackDetail.id !== trackId ?
                        'Loading...' :
                        trackDetail.attributes.title
                }
            </div>

        </div>
    )
}