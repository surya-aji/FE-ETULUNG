import Script from "next/script"

const ScriptLayout = () => {
  return(
    <>

    {/* <!-- build:js assets/vendor/js/core.js --> */}
    <Script src="/admin-assets/assets/vendor/libs/jquery/jquery.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/popper/popper.js"></Script>
    <Script src="/admin-assets/assets/vendor/js/bootstrap.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/node-waves/node-waves.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/hammer/hammer.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/i18n/i18n.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/typeahead-js/typeahead.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/swiper/swiper.js"></Script>
    
    <Script src="/admin-assets/assets/vendor/js/menu.js"></Script>
    {/* <!-- build:js assets/vendor/js/core.js --> */}

    {/* <!-- Vendors JS --> */}
    <Script src="/admin-assets/assets/vendor/libs/moment/moment.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></Script>
    <Script src="/admin-assets/assets/vendor/libs/apex-charts/apexcharts.js"></Script>
    {/* <!-- Vendors JS -->*/}

    {/* <!-- Main JS --> */}
    <Script src="/admin-assets/assets/js/main.js"></Script>
    {/* <!-- Main JS --> */}


    {/* <!-- Page JS --> */}
    <Script src="/admin-assets/assets/js/dashboards-analytics.js"></Script>
    <Script src="/admin-assets/assets/js/app-academy-dashboard.js"></Script>
    <Script src="/admin-assets/assets/js/pages-profile.js"></Script>
    {/* <!-- Page JS --> */}
    </>
  )
}

export default ScriptLayout;