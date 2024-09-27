import React from 'react'

import styles from './Features.module.css'

// For Data
import { FeaturesData } from '@/static/featureData'




import { FeatureBox } from './FeatureBox'


export const Features = () => {
    return (
        <div className={styles.Features}>
            {
                FeaturesData.map((I) => (
                    <FeatureBox
                        Icon={I.FeatureIcon}
                        key={I.id}
                        FeatureName={I.FeatureName}
                        FeatureDesc={I.FeatureDesc}
                    />

                ))
            }
        </div>
    )
}
