import React from 'react'
import {Helmet} from 'react-helmet'

const MataData = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} - ShopIT`}</title>
        </Helmet>
    )
}

export default MataData
