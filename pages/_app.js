import "swiper/swiper.scss";
import "../styles/styles.scss";
import "../styles/ngprogress.scss";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
