import React from 'react'

import styles from './GamingUniverse.module.css'

// for Data
import { GamingUniverseData } from '@/static/GamingUniverseData'

// For Components
import { Content } from '../Content/Content'
import { Box } from './Box'

export const GamingUniverse = () => {
    return (
        <div className={styles.GamingUniverse}>
            <Content
                h6Text='Gaming Universe: Your Ultimate Support Hub'
            />

            <div className={styles.Row}>
                {
                    GamingUniverseData.map((I) => (
                        <Box
                            key={I.id}
                            h6Text={I.Header}
                            pText={I.Desc}
                            Imgurl={I.ImgUrl}
                        />
                    ))
                }
            </div>

        </div>
    )
}
