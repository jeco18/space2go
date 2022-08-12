import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import Slider from "react-slick";





const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"

  ];
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
    <div className="w-9/12">
      {/* <Rerousel>
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          
          <>
          
            {data &&
              images.map((img,i) => (

                <div className="pListItem" key={i} >
                  <img
                    src={img}
                    alt=""
                    className="pListImg"
                  />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                  </div>

                </div>
                
      
              ))}

          </>
          
        )}
      </div>
      </Rerousel> */}
        <Slider {...settings  }>
        {images.map((img,i) =>(
          <div className="pListItem"><img
          src={img}
          alt=""
          className="pListImg p-2"
        /><div className="pListTitles px-2">
        <h1>{data[i]?.type}</h1>
        <h2>{data[i]?.count} {data[i]?.type}</h2>
      </div></div>
        ))}
      </Slider> 
      </div>
  );
};

export default PropertyList;
