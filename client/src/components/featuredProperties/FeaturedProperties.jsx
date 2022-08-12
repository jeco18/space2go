import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from 'react-router-dom'
import Slider from "react-slick";

const FeaturedProperties = (item) => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              
              <Link to={`hotels/${item._id}`}>
              
                <img
                  src={item.photos[0]}
                  alt=""
                  className="fpImg"
                />
                
  
                <p className="fpName">{item.name}</p>
                <p className="fpPrice">Starting from ₱{item.cheapestPrice}</p> 
                <p className="fpCity">{item.city}</p>
              </Link>
                {item.rating && <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
                }
            </div>
            
          ))}
          </Slider>
        </>
        
      )}
              
    </div>
  );
};

export default FeaturedProperties;
