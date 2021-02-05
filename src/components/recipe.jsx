import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import recipe1 from '../assets/images/recipe-1.png';
import recipe2 from '../assets/images/recipe-2.png';
import recipe3 from '../assets/images/recipe-3.png';
import recipe4 from '../assets/images/recipe-4.png';
import recipe5 from '../assets/images/recipe-5.png';
import recipe6 from '../assets/images/recipe-6.png';
import RecipeBox from "./recipe-box";

class Recipe extends Component {
    
    render(){
        return(
            <React.Fragment>
                <section className="recipe-book pad-t-md pad-b-md">
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-2 col-md-8 recipe-header text-center">
                            <h2>Recipe</h2>
                            </div>
                            <div className="offset-md-2 col-md-8 recipe-header text-center pad-b-sm">
                            <h4>Multiply your dessert options and make them more exciting with London Dairy Premium Ice Creams.</h4>
                            <p>We know what it takes to make the finest ice cream; all you have to do is sit back and enjoy!</p>
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Raspberry Popstickle" itemImage={recipe1} />
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Ice Cream in a Jar" itemImage={recipe2} />
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Melting chocolate Milkshake" itemImage={recipe3} />
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Raspberry Ice Cream Milkshake" itemImage={recipe4} />
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Chocolate Sunday" itemImage={recipe5} />
                            </div>
                            <div className="col-md-4 mar-t-sm mar-b-sm">
                                <RecipeBox itemName="Banana Split in a Jar" itemImage={recipe6} />
                            </div>
                            <div className="col-md-12 text-center pad-t-sm pad-b-md">
                                <a href="" className="recipe-button">Discover <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Recipe;