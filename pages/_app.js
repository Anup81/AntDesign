import "../styles/globals.css";
import "antd/dist/antd.css";
import FooterDesign from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FooterDesign />
    </>
  );
}
export default MyApp;
