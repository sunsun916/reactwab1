import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  nav {
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;

    position: fixed;
    width: 100%;
    // padding: 0 44px;
    height: 100px;
    z-index: 9999;
    
  }
  nav:hover {background-color: #fff !important;}
  nav .main_menu {
    background-color: #fff;
    text-indent: -9999px;
    width: 100%;
    height: 210px;
    position: absolute;
    left: 0;
    top: 125px;
    opacity: 0;
    pointer-events: none;
  }
  /* nav:hover {
    background-color: #fff;
  } */

  nav:hover .main_menu {
    opacity: 1;
  }
  nav:hover h1 img {
    opacity: 0;
  }
  nav:hover h1 {
    background: url(./images/logo-c.png) no-repeat 50%;
  }
  nav .menu_btn {
    width: 33px;
    height: 25px;
    margin-bottom: 10px;
  }
  nav .menu_btn svg path {
    fill: #fff;
  }
  nav:hover .menu_btn svg path {
    fill: #000 !important;
  }
  nav #gnb {
    display: flex;
  }
  nav #gnb > li {
    position: relative;
  }
  /* 메인메뉴 제목 */
  nav #gnb > li > a {
    height: 100px;
    line-height: 100px;
    padding: 0 40px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
  nav:hover #gnb > li > a {
    color: #000;
  }
  nav:hover #gnb > li > a > span {
    color: #000 !important;
  }
  /* 서브하위메뉴 */
  nav #gnb .sub_menu {
    text-align: center;
    background-color: #fff;
    width: 100%;
    padding-top: 40px;
    position: absolute;
    left: 0;
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    opacity: 0;
    pointer-events: none;
  }
  nav #gnb .sub_menu a {
    font-size: 15px;
    padding-bottom: 14px;
    color: #7b7b7b;
  }
  nav #gnb .sub_menu a:hover {
    color: #458fdb;
    font-weight: 500;
  }
  nav:hover #gnb > li .sub_menu {
    opacity: 1;
    pointer-events: all;
  }
`;
// const Btn = styled.div`
// width: 20px;

// `;

function Nav() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [changeImg, setChangeImg] = useState('./images/logo-a.png');
  const [txtColor, setTxtColor] = useState('#fff');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("8rem");
    window.scrollY > 10 ? setChangeImg("./images/logo-c.png") : setChangeImg("./images/logo-a.png");
    window.scrollY > 10 ? setTxtColor("#000") : setTxtColor("#fff");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <Container>
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all .2s",
          }}
        >
          <h1>
            <a href="#">
              <img src={changeImg} alt="파이브스톤로고" />
            </a>
          </h1>
          <div className="main_menu">hover</div>
          <ul id="gnb">
            <li>
              <a href="#">
                <span style={{color: txtColor}}>About US</span>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">회사개요</a>
                </li>
                <li>
                  <a href="#">CEO 인사말</a>
                </li>
                <li>
                  <a href="#">오시는 길</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span style={{color: txtColor}}>Business</span>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">사업분야01</a>
                </li>
                <li>
                  <a href="#">사업분야02</a>
                </li>
                <li>
                  <a href="#">사업분야03</a>
                </li>
                <li>
                  <a href="#">사업분야04</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span style={{color: txtColor}}>Product</span>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">제품안내01</a>
                </li>
                <li>
                  <a href="#">제품안내02</a>
                </li>
                <li>
                  <a href="#">제품안내03</a>
                </li>
                <li>
                  <a href="#">제품안내04</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span style={{color: txtColor}}>Community</span>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">홍보자료</a>
                </li>
                <li>
                  <a href="#">채용안내</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span style={{color: txtColor}}>Customer</span>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">1:1문의</a>
                </li>
                <li>
                  <a href="#">묻고답하기</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <Btn> */}
          <a href="#" className="menu_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path style={{fill:txtColor}} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </a>
          {/* </Btn> */}
        </nav>
      </Container>
    </div>
  );
}

export default Nav;
