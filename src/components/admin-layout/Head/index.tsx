/* eslint-disable */

import Script from "next/script";

const HeadLayout = () => {

  return (
    <div className="layout-navbar-fixed layout-compact layout-menu-100vh dark-style layout-menu-fixed layout-menu-collapsed" data-theme="theme-default">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
      />
      <title>
        Planing E-Tulung FrontEnd
      </title>
      <meta name="description" content="" />
      {/* Favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/admin-assets/assets/img/favicon/favicon.ico"
      />
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
        rel="stylesheet"
      />
      {/* Icons */}
      <link rel="stylesheet" href="/admin-assets/assets/vendor/fonts/fontawesome.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/fonts/tabler-icons.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/fonts/flag-icons.css" />
      {/* Core CSS */}
      <link rel="stylesheet" href="/admin-assets/assets/vendor/css/rtl/core-dark.css"/>
      <link rel="stylesheet" href="/admin-assets/assets/vendor/css/rtl/theme-semi-dark-dark.css"/>
      <link rel="stylesheet" href="/admin-assets/assets/css/demo.css" />
      {/* Vendors CSS */}
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/node-waves/node-waves.css"/>
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"/>
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/typeahead-js/typeahead.css"/>
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/plyr/plyr.css" />

      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/apex-charts/apex-charts.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/swiper/swiper.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css" />
      {/* Page CSS */}
      <link rel="stylesheet" href="/admin-assets/assets/vendor/css/pages/app-academy.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/css/pages/cards-advance.css" />
      <link rel="stylesheet" href="/admin-assets/assets/vendor/css/pages/page-profile.css" />

      <Script src="/admin-assets/assets/vendor/js/helpers.js"></Script>
      <Script src="/admin-assets/assets/vendor/js/template-customizer.js"></Script>
      <Script src="/admin-assets/assets/js/config.js"></Script>

    </div>
  )
}

export default HeadLayout;