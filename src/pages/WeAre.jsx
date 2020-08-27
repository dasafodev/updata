import React from 'react';
import BadgeAmazon from '../components/BadgeAmazon';
import Team from '../components/Team';

import '../styles/components/Home.css';

export class WeAre extends React.Component{
    render(){
        return(
            <div className = "cat-container">
            <div>
                <Team />
            </div>
        </div>
        )
    }
}

export default WeAre;