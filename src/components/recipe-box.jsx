import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import recipe1 from '../assets/images/recipe-1.png';

class RecipeBox extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        var data = this.props;
        return(
            <React.Fragment>
                <div className="recipe-box">
                    <div className="recipe-image">
                        <img src={data.itemImage} className="width100" />
                    </div>
                    <div className="recipe-info navbar">
                        <div className="navbar-nav">
                            <p className="mar-zero">{data.itemName}</p>
                        </div>
                        <div className="navbar-nav">
                            <ul className="recipe-icons">
                            <li><FontAwesomeIcon icon={faDownload} /></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default RecipeBox;