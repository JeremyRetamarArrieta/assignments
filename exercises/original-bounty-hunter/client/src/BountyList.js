import React from 'react'
import Bounty from './Bounty'

const BountyList = props => {
    return (
        <div>
            { props.bounties.map(bounty =>
                            <Bounty
                                deleteBounty={props.deleteBounty}
                                key={bounty._id}
                                {...bounty}
                                />)
            }
        </div>
    )
}

export default BountyList