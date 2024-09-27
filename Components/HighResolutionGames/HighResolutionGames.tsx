import React from 'react'

import styles from './HighResolutionGames.module.css'

import { HightResolution } from './HightResolution'


// For Data
import { HighResolutionGamesData } from '@/static/highResolutionGames'

// For Components
import { Content } from '../Content/Content'

export const HighResolutionGames = () => {
    return (
        <>
            <Content h6Text={'High Resolution Games'} />
            <div className={styles.HighResolutionGames}>
                {
                    HighResolutionGamesData.map((I) => (
                        <HightResolution
                            key={I.id}
                            img={I.GameImg}
                            GameName={I.GameName}
                            Rating={I.GameRating}
                            Resolution={I.GameResolution}
                        />
                    ))
                }
            </div>
        </>
    )
}
