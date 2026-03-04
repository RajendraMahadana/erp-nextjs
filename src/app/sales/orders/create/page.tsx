import Breadcrumb from "@/components/Breadcumb";

export default function CreateOrder() {
    return(
        <>
            <div className="">

            {/* <!-- container --> */}
            <div className="main-container container-fluid">

                {/* <!-- breadcrumb --> */}
                    <Breadcrumb />
                {/* <!-- /breadcrumb --> */}


                <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div>
                        <h3 className="mb-3">Form Sales Order</h3>
                    </div>
                    <div className="d-flex gap-2 ">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Import
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Export</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-teal d-flex gap-1 align-items-center btn-wave">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                            </svg>
                            <a href="orders.html">Kembali</a>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    Form Sales Order
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row gy-4">

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <label htmlFor="no-order" className="form-label">No. Order</label>
                                        <input type="text" className="form-control" id="no-order" placeholder="SO-001/2025"></input>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <label htmlFor="tanggal-order" className="form-label">Tanggal</label>
                                        <input type="date" className="form-control" id="tanggal-order"></input>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <label htmlFor="customer" className="form-label">Customer</label>
                                        <input type="text" className="form-control" id="customer"
                                            placeholder="Pilih atau masukkan nama customer"></input>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <label htmlFor="alamat-penagihan" className="form-label">Alamat Penagihan</label>
                                        <textarea className="form-control" id="alamat-penagihan" rows={2}
                                            placeholder="Alamat penagihan customer"></textarea>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <label htmlFor="alamat-pengiriman" className="form-label">Alamat Pengiriman</label>
                                        <textarea className="form-control" id="alamat-pengiriman" rows={2}
                                            placeholder="Alamat pengiriman barang"></textarea>
                                    </div>


                                    <div className="col-xl-12">
                                        <label className="form-label">Detail Pesanan</label>

                                        <table className="table table-bordered">
                                            <thead style={{ backgroundColor:"#2c3e50", color:"white", textAlign:"center" }}>
                                                <tr>
                                                    <th>Produk <span className="text-danger">*</span></th>
                                                    <th>Deskripsi</th>
                                                    <th>Kuantitas <span className="text-danger">*</span></th>
                                                    <th>Unit<span className="text-danger">*</span></th>
                                                    <th>Harga Satuan</th>
                                                    <th>Subtotal</th>
                                                    <th style={{ width: "50px" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="barangTable">
                                                <tr>
                                                    <td>
                                                        <select className="form-select">
                                                            <option>Pilih Produk</option>
                                                            <option>Produk A</option>
                                                            <option>Produk B</option>
                                                        </select>
                                                    </td>
                                                    <td><input type="text" className="form-control"
                                                            placeholder="Deskripsi Produk"></input></td>
                                                    <td><input type="number" className="form-control" placeholder="0"></input></td>
                                                    <td><input type="nu" className="form-control" placeholder="Pcs"></input></td>
                                                    <td><input type="text" className="form-control" placeholder="0"></input></td>
                                                    <td><input type="text" className="form-control" placeholder="Rp 0"
                                                            readOnly></input></td>
                                                    <td className="text-center">
                                                        <button type="button" className="btn btn-sm btn-danger">✖</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <button type="button" className="btn btn-success rounded-pill px-4 mt-2">
                                            <i className="bi bi-plus-circle"></i> Tambah Baris
                                        </button>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="row justify-content-end">
                                            <div className="col-xl-4 col-lg-5 col-md-6">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span className="fw-semibold">Subtotal:</span>
                                                    <span>Rp 0</span>
                                                </div>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span className="fw-semibold">Pajak (PPN 11%):</span>
                                                    <span>Rp 0</span>
                                                </div>
                                                <hr></hr>
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="fw-bold">Total:</h5>
                                                    <h5 className="fw-bold">Rp 0</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <label htmlFor="catatan" className="form-label">Catatan</label>
                                        <textarea className="form-control" id="catatan" rows={2}
                                            placeholder="Catatan tambahan..."></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <button className="btn btn-primary">Simpan Sales Order</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /main-content --> */}


                    {/* <!-- Footer Start --> */}
                    <footer className="footer mt-auto py-3 bg-white text-center">
                        <div className="container">
                            <span> Copyright © <span id="year"></span> <a href="javascript:void(0);"
                                    className="text-primary">Nowa</a>.
                                Designed with <span className="bi bi-heart-fill text-danger"></span> by <a
                                    href="javascript:void(0);">
                                    <span className="fw-semibold text-decoration-underline">Spruko</span>
                                </a> All
                                rights
                                reserved
                            </span>
                        </div>
                    </footer>
                    {/* <!-- Footer End --> */}
                    {/* <!-- Start Rightsidebar --> */}
                    <div className="sidebar offcanvas offcanvas-end" tabIndex={-1} id="sidebar-canvas"
                        aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header border-bottom bg-light">
                            <h6 className="offcanvas-title text-default" id="offcanvasRightLabel22">NOTIFICATIONS</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body p-0">
                            <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                                <div className="tabs-menu p-3">
                                    {/* <!-- Tabs --> */}
                                    <ul className="nav panel-tabs">
                                        <li className=""><a href="#side1" className="active" data-bs-toggle="tab"><svg
                                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                                    height="24" viewBox="0 0 24 24" width="24">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                                                </svg> Chat</a></li>
                                        <li className=""><a href="#side2" data-bs-toggle="tab"><svg
                                                    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                                    className="side-menu__icon" height="24" viewBox="0 0 24 24" width="24">
                                                    <g>
                                                        <path d="M0,0h24v24H0V0z" fill="none" />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M12,18.5c0.83,0,1.5-0.67,1.5-1.5h-3C10.5,17.83,11.17,18.5,12,18.5z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10 c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8c4.41,0,8,3.59,8,8S16.41,20,12,20z M16,11.39 c0-2.11-1.03-3.92-3-4.39V6.5c0-0.57-0.43-1-1-1s-1,0.43-1,1V7c-1.97,0.47-3,2.27-3,4.39V14H7v2h10v-2h-1V11.39z M14,14h-4v-3 c0-1.1,0.9-2,2-2s2,0.9,2,2V14z" />
                                                    </g>
                                                </svg> Notifications</a></li>
                                        <li className=""><a href="#side3" data-bs-toggle="tab"><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink" className="side-menu__icon"
                                                    height="24" version="1.1" width="24" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11C11.17,11 10.5,10.33 10.5,9.5C10.5,8.67 11.17,8 12,8C12.83,8 13.5,8.67 13.5,9.5C13.5,10.33 12.83,11 12,11Z" />
                                                </svg> Friends</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active p-0 border-0" id="side1">
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-primary rounded-circle avatar-md">CH</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>New Websites is Created</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">30 mins ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-danger rounded-circle avatar-md">N</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Prepare For the Next Project</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">2 hours ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-info rounded-circle avatar-md">S</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Decide the live Discussion</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">3 hours ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-warning rounded-circle avatar-md">K</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Meeting at 3:00 pm</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">4 hours ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-success rounded-circle avatar-md">R</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Prepare for Presentation</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">1 days ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-pink rounded-circle avatar-md">MS</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Prepare for Presentation</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">1 days ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center border-bottom p-3">
                                            <div className="">
                                                <span className="avatar bg-purple rounded-circle avatar-md">L</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Prepare for Presentation</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">45 mintues ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list d-flex align-items-center p-3">
                                            <div className="">
                                                <span className="avatar bg-secondary rounded-circle avatar-md">U</span>
                                            </div>
                                            <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                                <p className="mb-0 d-flex ">
                                                    <b>Prepare for Presentation</b>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <i className="mdi mdi-clock text-muted me-1 fs-11"></i>
                                                        <small className="text-muted ms-auto">2 days ago</small>
                                                        <p className="mb-0"></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane p-0 border-0 " id="side2">
                                        <div className="list-group list-group-flush ">
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/12.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Madeleine</strong> Hey! there I' am available....
                                                    <div className="small text-muted">
                                                        3 hours ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/1.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Anthony</strong> New product Launching...
                                                    <div className="small text-muted">
                                                        5 hour ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/2.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Olivia</strong> New Schedule Realease......
                                                    <div className="small text-muted">
                                                        45 mintues ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/8.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Madeleine</strong> Hey! there I' am available....
                                                    <div className="small text-muted">
                                                        3 hours ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/11.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Anthony</strong> New product Launching...
                                                    <div className="small text-muted">
                                                        5 hour ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/6.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Olivia</strong> New Schedule Realease......
                                                    <div className="small text-muted">
                                                        45 mintues ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-3">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/9.jpg" alt="img"></img>
                                                </div>
                                                <div>
                                                    <strong>Olivia</strong> Hey! there I' am available....
                                                    <div className="small text-muted">
                                                        12 mintues ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane p-0 border-0 " id="side3">
                                        <div className="list-group list-group-flush ">
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/9.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Mozelle Belt</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/11.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Florinda Carasco</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/10.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Alina Bernier</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/2.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Zula Mclaughin</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/13.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Isidro Heide</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/12.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Mozelle Belt</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/4.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Florinda Carasco</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/7.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Alina Bernier</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/2.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Zula Mclaughin</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/14.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Isidro Heide</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/11.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Florinda Carasco</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/9.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Alina Bernier</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/15.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Zula Mclaughin</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                            <div className="list-group-item d-flex  align-items-center border-0">
                                                <div className="me-2">
                                                    <img className="avatar avatar-md rounded-circle cover-image"
                                                        src="../assets/images/faces/4.jpg" alt="img"></img>
                                                </div>
                                                <div className="">
                                                    <div className="font-weight-semibold">Isidro Heide</div>
                                                </div>
                                                <div className="ms-auto">
                                                    <a href="javascript:void(0);"
                                                        className="btn btn-sm btn-outline-light btn-rounded"><i
                                                            className="fe fe-message-square fs-16"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Rightsidebar --> */}



                </div>
                </div>
                </div>
        </>
    )
}