import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./assets/articleStyle.scss";

//style
import { useState } from "react";

// const Header = styled.div`
// header h2 {
//     position: absolute;
//     top: 265px; left: 125px;

//     color: #fff;
//     font-size: 60px;
//     font-weight: 500;
// }
// header p {
//     position: absolute;
//     top: 380px; left: 125px;
//     color: #fff;
// }
// header .slide_ul {
//     position: absolute;
//     top: 607px; left: 50%;
//     transform: translateX(-50%);
//     color: white;
//     display: flex;
// }
// header .slide_ul li a {
//     text-indent: -9999px;
//     width: 50px; height: 5px;
//     margin: 4px;
//     border: 1px solid #fff;
// }
// header .slide_ul li a.active {
//     border-color: transparent;
//     background-color: #73aeea;
// }
// `

const dataList = [
  { id: 1, URL: "/images/visual01.jpg", atl: "img1" },
  { id: 2, URL: "/images/visual02.jpg", atl: "img2" },
  { id: 3, URL: "/images/visual03.jpg", atl: "img3" },
];

function HeaderSwiper() {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(dataList);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        breakpoints={{
          761: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        navigation
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((poto) => (
          <SwiperSlide key={poto.id}>
            {" "}
            <img src={path + poto.URL} alt={poto.title} />
            <header>
              <div className="slide_banner">
                <h2>
                  <span>VERSATILE</span>
                  <span className="hide1"> DESIGN</span>
                </h2>
                <p>
                  정직과 신뢰, 디자인을 최우선으로 생각하며
                  <br className="hide" />
                  고객과 함께 할 수 있는 든든한 파트너가 되겠습니다.
                </p>
              </div>
            </header>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeaderSwiper;
