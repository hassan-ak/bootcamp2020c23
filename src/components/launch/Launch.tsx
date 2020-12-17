import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';

interface Props {
    data : LaunchesQuery;
}

export const Launch : React.FC<Props> = ({data}) => {
    return (
        <div className="Launches">
            <h3>All Space X Launches</h3>
            <ol className="LaunchesOl">
                {!!data.launches && data.launches.map(
                    (launch,i)=> !!launch && (
                        <li key={i} className='LaunchesItem'>
                            {launch.mission_name} - {launch.launch_year} ({launch.launch_success})
                        </li>
                    )
                )}
            </ol>            
        </div>
    )
}
