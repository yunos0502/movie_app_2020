import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img.hankyung.com/photo/201910/01.20660060.1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://static.hubzum.zumst.com/hubzum/2018/02/05/10/00ada3e050e9403ba3214006a9e2b5fe.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "bibimbap",
    image:
      "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating: 4.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
