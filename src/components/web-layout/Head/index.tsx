import Script from "next/script"


const HeadLayout = () => {
  return (
    <>
    
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Landing Page - Front Pages | Vuexy - Bootstrap Admin Template</title>
  <meta name="description" />
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="/admin-assets/assets/img/favicon/favicon.ico" />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/admin-assets/assets/vendor/fonts/tabler-icons.css" />
  {/* Core CSS */}
  <link rel="stylesheet" href="/admin-assets/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="/admin-assets/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="/admin-assets/assets/css/demo.css" />
  <link rel="stylesheet" href="/admin-assets/assets/vendor/css/pages/front-page.css" />
  {/* Vendors CSS */}
  <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/node-waves/node-waves.css" />
  <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/nouislider/nouislider.css" />
  <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/swiper/swiper.css" />
  {/* Page CSS */}
  <link rel="stylesheet" href="/admin-assets/assets/vendor/css/pages/front-page-landing.css" />
  {/* Helpers */}
  <Script src="admin-assets/assets/vendor/js/helpers.js"></Script>
    {/* <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  --> */}
    <Script src="admin-assets/assets/vendor/js/template-customizer.js"></Script>
    {/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
    <Script src="admin-assets/assets/js/front-config.js"></Script>
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* Navbar: Start */}
  <Script src="admin-assets/assets/vendor/js/dropdown-hover.js"></Script>
  <Script src="admin-assets/assets/vendor/js/mega-dropdown.js"></Script>
    </>
  )
}

export default HeadLayout;

