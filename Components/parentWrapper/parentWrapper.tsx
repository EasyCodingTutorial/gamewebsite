import React from 'react'

import styles from './parentWrapper.module.css'

const ParentWrapper = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className={styles.parentWrapper}>
            {children}
        </div>
    )
}

export default ParentWrapper