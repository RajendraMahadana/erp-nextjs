import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "ERP Cration",
  description: "Bootstrap Responsive Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="vertical"
      data-theme-mode="light"
      data-header-styles="light"
      data-menu-styles="light"
      data-toggled="close"
    >
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/images/brand-logos/favicon.ico"
          type="image/x-icon"
        />

        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="/assets/libs/bootstrap/css/bootstrap.min.css"
        />

        {/* Main Style */}
        <link
          rel="stylesheet"
          href="/assets/css/styles.min.css"
        />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="/assets/css/icons.css"
        />

        {/* Node Waves */}
        <link
          rel="stylesheet"
          href="/assets/libs/node-waves/waves.min.css"
        />

        {/* Simplebar */}
        <link
          rel="stylesheet"
          href="/assets/libs/simplebar/simplebar.min.css"
        />

        {/* Flatpickr */}
        <link
          rel="stylesheet"
          href="/assets/libs/flatpickr/flatpickr.min.css"
        />

        {/* Pickr */}
        <link
          rel="stylesheet"
          href="/assets/libs/@simonwep/pickr/themes/nano.min.css"
        />

        {/* Choices */}
        <link
          rel="stylesheet"
          href="/assets/libs/choices.js/public/assets/styles/choices.min.css"
        />

        {/* JSVectorMap */}
        <link
          rel="stylesheet"
          href="/assets/libs/jsvectormap/css/jsvectormap.min.css"
        />

        {/* Swiper */}
        <link
          rel="stylesheet"
          href="/assets/libs/swiper/swiper-bundle.min.css"
        />

        {/* ApexCharts */}
        <link
          rel="stylesheet"
          href="/assets/libs/apexcharts/apexcharts.css"
        />
      </head>

      <body>
        <Header />
        <Sidebar />
        <div className="main-content app-content">
          {children}
        </div>

        {/* JS Files */}
        <Script
          src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />

        <Script src="/assets/libs/@popperjs/core/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/defaultmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/node-waves/waves.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/sticky.js" strategy="afterInteractive" />
        <Script src="/assets/libs/simplebar/simplebar.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/simplebar.js" strategy="afterInteractive" />
        <Script src="/assets/libs/@simonwep/pickr/pickr.es5.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/jsvectormap/js/jsvectormap.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/jsvectormap/maps/world-merc.js" strategy="afterInteractive" />
        <Script src="/assets/libs/apexcharts/apexcharts.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/chart.js/chart.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/index.js" strategy="afterInteractive" />
        <Script src="/assets/js/apexcharts-radialbar.js" strategy="afterInteractive" />
        <Script src="/assets/js/apexcharts-line.js" strategy="afterInteractive" />
        <Script src="/assets/js/apexcharts-column.js" strategy="afterInteractive" />
        <Script src="/assets/js/apexcharts-bar.js" strategy="afterInteractive" />
        <Script src="/assets/libs/echarts/echarts.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/echarts.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom-switcher.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>


    </html>
  );
}