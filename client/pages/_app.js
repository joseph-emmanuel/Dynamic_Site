import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps, globalData }) {
  // console.log("Global data :", globalData["Navigation"]);

  return (
    <Layout data={globalData}>
      <Component {...pageProps} />
    </Layout>
  );
}
MyApp.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:1337/api/global?populate=deep");
  const json = await res.json();

  return { globalData: json["data"]["attributes"] };
};

export default MyApp;
