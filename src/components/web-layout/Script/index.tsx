import Script from "next/script";

const ScriptLayout = () => {
  return(
    <>
    <Script src="/admin-assets/assets/vendor/libs/popper/popper.js"></Script>
    <Script src="/admin-assets/assets/vendor/js/bootstrap.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/node-waves/node-waves.js"></Script>
  
    {/* build:js assets/vendor/js/core.js */}
    {/* endbuild */}
    {/* Vendors JS */}
    <Script src="/admin-assets/assets/vendor/libs/nouislider/nouislider.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/swiper/swiper.js"></Script>
    {/* <!-- Main JS --> */}
    <Script src="/admin-assets/assets/js/front-main.js"></Script>
  
    {/* <!-- Page JS --> */}
    <Script src="/admin-assets/assets/js/front-page-landing.js"></Script>
    </>
  )
};

export default ScriptLayout;