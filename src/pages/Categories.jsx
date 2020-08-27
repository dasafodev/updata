<<<<<<< HEAD
import React from 'react';
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

=======
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

>>>>>>> 23d019b6b6bd6091dd2e8460a77a20a7ca563b37
export default Categories;