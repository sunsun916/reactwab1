import "./assets/articleStyle.scss";

function Article1() {

    const data = [
        {id:1, URL:`/images/m-ms01.jpg`, title:`회사개요`, subTitle:`고객과 함께 꾸준히 성장한 당사의 개요, 비전 등의 내용을 소개합니다.`},
        {id:2, URL:`/images/m-ms02.jpg`, title:`사업분야`, subTitle:`당사의 사업내역 및 앞으로 계획하고 진행할 사업계획을 정리하였습니다.`},
        {id:3, URL:`/images/m-ms03.jpg`, title:`제품안내`, subTitle:`고객감동을 실현하는 당사의 추천상품을 자세히 보실 수 있는 공간입니다.`},
        {id:4, URL:`/images/m-ms04.jpg`, title:`홍보자료`, subTitle:`각종 미디어에 소개된 당사의 언론 및 영상 자료를 보실 수 있는 공간입니다.`},
    ];
    
const path = process.env.PUBLIC_URL;

  return (
    <>
    <main>
        <article id="main_service">
            <h2 className="title">main service</h2>
            <h3 className="sub_title">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</h3>
            <ul className="servicebox">
                {
                   data.map((item) => <li key={item.id}>
                    <img src={path + item.URL} alt={"img"+item.id} />
                    <h3>{item.title}</h3>
                    <p>{item.subTitle}</p>
                    </li>
                   ) 
                }

                {/* <li>
                    <a href="#"><img src="./images/m-ms01.jpg" alt="img1" /></a>
                    <h3><a href="#">회사개요</a></h3>
                    <p><a href="#">고객과 함께 꾸준히 성장한 당사의 개요, 비전 등의 내용을 소개합니다.</a></p>
                </li>
                <li>
                    <a href="#"><img src="./images/m-ms02.jpg" alt="img2" /></a>
                    <h3><a href="#">사업분야</a></h3>
                    <p><a href="#">당사의 사업내역 및 앞으로 계획하고 진행할 사업계획을 정리하였습니다.</a></p>
                </li>
                <li>
                    <a href="#"><img src="./images/m-ms03.jpg" alt="img3" /></a>
                    <h3><a href="#">제품안내</a></h3>
                    <p><a href="#">고객감동을 실현하는 당사의 추천상품을 자세히 보실 수 있는 공간입니다.</a></p>
                </li>
                <li>
                    <a href="#"><img src="./images/m-ms04.jpg" alt="img4" /></a>
                    <h3><a href="#">홍보자료</a></h3>
                    <p><a href="#">각종 미디어에 소개된 당사의 언론 및 영상 자료를 보실 수 있는 공간입니다.</a></p>
                </li>  */}
            </ul>
        </article>
    </main>
    </>
  );
}

export default Article1;