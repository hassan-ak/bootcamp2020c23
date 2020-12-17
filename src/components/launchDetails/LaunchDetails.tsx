import React from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';

interface Props {
    data : LaunchInfoQuery;
}

export const LaunchDetails : React.FC<Props> = ({data}) => {
    if (!data.launch){
        return <div>Launch Unavailable</div>
    }
    return (
        <div className = "Launchdeatils">
            <div className= "LaunchDetailsStatus">
                <span>Flight {data.launch.flight_number} : </span>
            </div>
            
        </div>
    )
}
