import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
import Article5 from "./components/Article5";
import Footer from "./components/Footer";
import HeaderSwiper from "./components/HeaderSwiper";
import Nav from "./components/Nav";
import GlobalStyle from "./components/assets/GlobalStyle";
import MainStyle from "./components/assets/MainStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <MainStyle /> */}
      <Nav />
      <HeaderSwiper />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
      <Footer />
    </>
  );
}

export default App;
