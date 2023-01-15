import React from "react";
import "./assets/articleStyle.scss";

function Footer() {
  return (
    <>
      <footer className="container">
        <div className="f_logo">
          <img src="./images/logo-f.png" alt="하단로고" />
        </div>
        <div className="footer_rink">
          <ul className="footer_info footer_border">
            <li>
              <a href="#">개인정보취급방침</a>
            </li>
            <li>
              <a href="#">이메일무단수집거부</a>
            </li>
            <li>
              <a href="#">묻고답하기</a>
            </li>
          </ul>
        </div>
        <div className="footer_address">
          <ul className="footer_info footer_border">
            <li>회사 : 파이브스톤</li>
            <li>
              주소 : 경기도 고양시 덕양구 삼송로 193번길 28-3 하준빌딩 401호
            </li>
            <li>사업자등록번호 : 780-42-00047</li>
          </ul>
        </div>
        <div className="footer_contact footer_border">
          <ul className="footer_info">
            <li>TEL : 010-2709-0828</li>
            <li>EMAIL : fivestone55@daum.net</li>
            <li className="copyright footer_info">COPYRIGHT © 2021 FIVESTONE. ALL RIGHT RESERVED</li>
          </ul>
        </div>
        <div className="footer_sns">
          <ul>
            <li>
              <a href="#" className="sns1">
                facebook
              </a>
            </li>
            <li>
              <a href="#" className="sns2">
                blog
              </a>
            </li>
            <li>
              <a href="#" className="sns3">
                insta
              </a>
            </li>
            <li>
              <a href="#" className="sns4">
                kakao
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="copyright footer_info">
          COPYRIGHT © 2021 FIVESTONE. ALL RIGHT RESERVED
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
