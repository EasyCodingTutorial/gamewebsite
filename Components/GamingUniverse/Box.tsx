import React from 'react'

import styles from './GamingUniverse.module.css'

interface BoxProps {
    h6Text: string,
    pText: string,
    Imgurl: string,
    ImgAlt?: string,
}

export const Box = (
    {
        h6Text,
        pText,
        Imgurl,
        ImgAlt
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <div className={styles.Content}>
                <div className={styles.Custom}>
                    <div>
                        <h6>{h6Text}</h6>
                        <p>
                            {pText}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.Content}>
                <img src={Imgurl} alt={ImgAlt} />
            </div>
        </div>
    )
}
