import React from 'react';
import Header from '../components/header';
import BadgeAmazon from '../components/BadgeAmazon';
import BadgeMl from '../components/BadgeMl';

import '../styles/components/Home.css';

export class Categories extends React.Component{
    render(){
        return(
            <div className = "cat-container">
            <div>
        <BadgeAmazon />
            </div>
            <div>
                <BadgeMl />
            </div>
        </div>
        )
    }
}

export default Categories;