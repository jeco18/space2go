import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Boracay,Bohol,Palawan"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
          <Link to='/boracay'>
            <img
              src="https://thumbs.dreamstime.com/b/boracay-island-tropical-diniwid-beach-philippines-view-towards-mainland-51148010.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Boracay</h1>
              <h2>{data[0]} properties</h2>
            </div>
            </Link>
          </div>

          <div className="featuredItem">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/60/13/210/chocolate-hills-at-sunrise-bohol-island-philippines-wallpaper-preview.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bohol</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZS9NVOROuYZEfrJKYw6FpGtiTm-7M4Uw-g&usqp=CAU"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Palawan</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
{/* 
      <Slider {...settings }>
      
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Boracay</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bohol</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Palawan</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
      </Slider> */}
    </div>
  );
};

export default Featured;
