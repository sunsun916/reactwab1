import React from "react";
import "./assets/articleStyle.scss";

function Article3() {
  const data = [
    { id: 1, URL: `/images/m-op01.jpg` },
    { id: 2, URL: `/images/m-op02.jpg` },
    { id: 3, URL: `/images/m-op03.jpg` },
    { id: 4, URL: `/images/m-op04.jpg` },
    { id: 5, URL: `/images/m-op05.jpg` },
  ];
  const path = process.env.PUBLIC_URL;

  return (
    <div>
      <article id="our_product">
        <h2 className="title">OUR PRODUCT</h2>
        <h3 className="sub_title">
          정직과 신뢰, 디자인으로 함께 하는 파이브스톤
        </h3>
        <div className="gallery">
        {data.map((item) => (
          <div
            className="gridItem"
            key={item.id}
            style={{
              background: `url(${path + item.URL}) no-repeat 50% / cover`,
            }}
          ></div>
        ))}
</div>
        {/* <div className="gridWrap">
            <a href="#" className="grid_img1 bg">
                <h4>DFSA 101</h4>
                <p className="view_btn">VIEW</p>
            </a>
            <a href="#" className="grid_img2 bg">
                <h4>SAFE 102</h4>
                <p className="view_btn">VIEW</p>
            </a>
            <a href="#" className="grid_img3 bg">
                <h4>XPYB 103</h4>
                <p className="view_btn">VIEW</p>
            </a>
            <a href="#" className="grid_img4 bg">
                <h4>ULQV 104</h4>
                <p class="view_btn">VIEW</p>
            </a>
            <a href="#" className="grid_img5 bg">
                <h4>ZMEG 105</h4>
                <p className="ghost_btn2">VIEW</p>
            </a>
        </div> */}
      </article>
    </div>
  );
}

export default Article3;
