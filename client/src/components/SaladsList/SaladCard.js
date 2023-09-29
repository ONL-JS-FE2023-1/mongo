import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const SaladCard = (props) => {
    const { name, images,weight, ingredients, sauce, dietType, isSpicy, expired } = props.salad;
    
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000
    };

    return (
        <article className='card-wrapper'>
            <h1>{name}</h1>

            {images && images.length > 0 ? (
                <Slider {...slickSettings}>
                    {images.map((imageName, index) => (
                        <div className='image-wrapper' key={index}>
                            <img src={`http://localhost:5000/${imageName}`} alt={`${index}`} />
                        </div>
                    ))}
                </Slider>
            ) : null}

            <p>Weight: {weight}</p>
            <p>Ingredients: </p>
            <ul>
                {ingredients.map((ingredient) => <li key={ingredient._id}>{ingredient.name}</li>)}
            </ul>
            <p>Sauce: {sauce}</p>
            <p>Diet type: {dietType}</p>
            <p>{isSpicy ? 'Spicy' : 'Not spicy'}</p>
            <p>Expired: {expired}</p>
        </article>
    );
}

export default SaladCard;
