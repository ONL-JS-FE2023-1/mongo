import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FileUploader } from "react-drag-drop-files";
import { addSaladImages } from '../../api';
import './style.css';

const fileTypes = ["JPEG", "PNG", "JPG"];

const SaladCard = (props) => {
    const { _id, name, images,weight, ingredients, sauce, dietType, isSpicy, expired } = props.salad;
    
    // Налаштування для каруселі slick-carousel
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000
    };

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    const uploadBtnHandler = async () => {
        if(file) {
            const formData = new FormData();
            [...file].forEach((file) => {
                formData.append('images', file);
            });

            try {
                await addSaladImages(formData, _id);
                setFile(null);
                await props.loadSalads();
            } catch (error) {
                console.error(error);
            }
        }
    }

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

            <p>Not enough images? Load more!</p>
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            {file ? <button onClick={uploadBtnHandler}>Upload image(s)</button> : null}

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
