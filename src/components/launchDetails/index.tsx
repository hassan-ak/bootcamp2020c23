import React from 'react';
import {useLaunchInfoQuery} from '../../generated/graphql';
import { LaunchDetails } from './LaunchDetails';

const LaunchDetailsContainer = () =>{
    const {data, error, loading} = useLaunchInfoQuery({variables : {id: "25"}} );

    if (loading) {
        return <div>Data is Loading</div>  
    }

    if (error) {
        return <div>There is some network Error</div>  
    }

    if (!data) {
        return <div>Please Select a Mission for its details</div>  
    }

    return <LaunchDetails data={data}/>
}

export default LaunchDetailsContainer;