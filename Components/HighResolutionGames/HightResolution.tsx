import React from 'react'
import styles from './HighResolutionGames.module.css'

interface hightResolutionProps {
    img: string
    ImgAlt?: string,
    GameName: string,
    Rating?: string,
    Resolution?: string
}

export const HightResolution = (
    { img, ImgAlt, GameName, Rating, Resolution }: hightResolutionProps
) => {
    return (
        <div className={styles.HightResolution}>
            <div>
                <div>
                    <img src={img} alt={ImgAlt} />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>{GameName}</h6>
                <div>
                    <p>Rating: {Rating}</p>
                    <p>Resolution: {Resolution}</p>
                </div>
            </div>
        </div>
    )
}
