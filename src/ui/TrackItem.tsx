import type {TrackListItemResource} from "../dal/api.ts";
import styles from './TrackItem.module.css'
import clsx from 'clsx';

type Props = {
    onSelect: (trackId: string) => void
    isSelected: boolean
    trackInfo: TrackListItemResource
}


export function TrackItem({onSelect, isSelected, trackInfo}: Props) {
    const handleClick = () => {
        onSelect?.(trackInfo.id)
    }

    const className = clsx({
        [styles.track]: true,
        [styles._selected]: isSelected,
    })

    return (
        <li key={trackInfo.id}
            className={className}
        >
            <div onClick={handleClick}>
                {trackInfo.attributes.title}
            </div>
            <audio src={trackInfo.attributes.attachments[0].url} controls></audio>
        </li>
    )
}