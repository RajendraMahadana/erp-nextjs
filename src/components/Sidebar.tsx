"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <aside className="app-sidebar sticky" id="sidebar">

      {/* Header */}
      <div className="main-sidebar-header">
        <Link href="/" className="header-logo">
          <img src="/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
          <img src="/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
          <img src="/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
          <img src="/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
          <img src="/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
          <img src="/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
        </Link>
      </div>

      {/* Sidebar Content */}
      <div className="main-sidebar" id="sidebar-scroll">


        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
          </div>
          <ul className="main-menu">
            {/* <!-- Start::slide__category --> */}
            <li className="slide__category"><span className="category-name">Main</span></li>
            {/* <!-- End::slide__category --> */}

            {/* <!-- Start::slide --> */}
            <li className="slide">
              <Link href="/dashboard" className={`side-menu__item ${pathname === "/dashboard" ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door side-menu__icon" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
                <span className="side-menu__label">Home</span>
              </Link>
            </li>
            {/* <!-- End::slide --> */}

            {/* <!-- Start::slide__category --> */}
            <li className="slide__category"><span className="category-name">WEB APPS</span></li>
            {/* <!-- End::slide__category --> */}

            {/* <!-- Start::slide --> */}
            <li className={`slide has-sub ${openMenu === "sales" ? "open" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("sales");
                }}
                className="side-menu__item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin side-menu__icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                </svg>
                <span className="side-menu__label">Sales</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="">Sales</a>
                </li>
                <li className="slide">
                  <Link href="/sales/overview" className={`side-menu__item ${pathname.startsWith("/sales/overview") ? "active" : ""
                    }`}>Overview</Link>
                </li>
                <li className="slide">
                  <Link href="/sales/invoices" className={`side-menu__item ${pathname.startsWith("/sales/invoices") ? "active" : ""
                    }`}>Invoices</Link>
                </li>
                <li className="slide">
                  <Link href="/sales/delivery" className={`side-menu__item ${pathname === "/sales/delivery" ? "active" : ""}`}>Delivery</Link>
                </li>
                <li className="slide">
                  <Link href="/sales/orders" className={`side-menu__item ${pathname === "/sales/orders" ? "active" : ""}`}>Orders</Link>
                </li>
              </ul>
            </li>
            {/* <!-- End::slide --> */}

            {/* <!-- Start::slide --> */}
            {/* <li className={`slide has-sub ${openMenu === "purchases" ? "open" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("purchases");
                }}
                className="side-menu__item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-receipt side-menu__icon" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="side-menu__label">Purchases</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="">Overview</a>
                </li>
                <li className="slide">
                  <a href="invoices.html" className="side-menu__item">Invoices</a>
                </li>
                <li className="slide">
                  <a href="breadcrumb.html" className="side-menu__item">Receipt</a>
                </li>
                <li className="slide">
                  <a href="buttongroup.html" className="side-menu__item">Orders</a>
                </li>
                <li className="slide">
                  <a href="buttons.html" className="side-menu__item">Requests</a>
                </li>
              </ul>
            </li> */}
            {/* <!-- End::slide -->

                <!-- Start::slide --> */}
            <li className={`slide has-sub ${openMenu === "partners" ? "open" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu("partners");
                }}
                className="side-menu__item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people side-menu__icon" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg>
                <span className="side-menu__label">Partners</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="">Partners</a>
                </li>
                <li className="slide">
                  <Link href="/partners/vendors" className={`side-menu__item ${pathname === "/partners/vendors" ? "active" : ""}`}>Vendors</Link>
                </li>
                {/* <li className="slide">
                  <a href="accordions_collpase.html" className="side-menu__item">Customers</a>
                </li> */}
              </ul>
            </li>
            {/* <!-- End::slide --> */}

            {/* <!-- Start::slide__category --> */}
            <li className="slide__category"><span className="category-name">Pages</span></li>
            {/* <!-- End::slide__category --> */}

            <li className="slide">
              <Link href="/product" className={`side-menu__item ${pathname === "/product" ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bucket side-menu__icon" viewBox="0 0 16 16">
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                </svg>
                <span className={`side-menu__label`}>Products</span>
              </Link>
            </li>

            <li className="slide">
              <Link href="/inventory" className={`side-menu__item ${pathname === "/inventory" ? "active" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam side-menu__icon" viewBox="0 0 16 16">
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
                <span className="side-menu__label">Inventory</span>
              </Link>
            </li>


            <li className="slide">
              <Link href="/balance" className={`side-menu__item ${pathname.startsWith("/balance") ? "active" : ""
                }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card side-menu__icon" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                <span className="side-menu__label">Balance</span>
              </Link>
            </li>



          </ul>
          <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
        </nav>


      </div>
    </aside>
  );
}