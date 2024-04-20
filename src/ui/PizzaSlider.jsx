import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PizzaSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mx-auto w-full max-w-xl ">
      <Slider {...settings}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
            alt="Pizza 1"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="Pizza 2"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg"
            alt="Pizza 3"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.eggs.ca/assets/RecipeThumbs/EFC-pizza-with-eggs-1280x720.jpg"
            alt="Pizza 4"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
            alt="Pizza 5"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
            alt="Pizza 6"
            className="w-full rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default PizzaSlider;
