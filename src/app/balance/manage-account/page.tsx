import Breadcrumb from "@/components/Breadcumb";

export default function ManageAccount() {
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
                            <h3 className=" ">Kas</h3>
                            <span className="mb-3">1-10001</span>
                        </div>
                                        
                    <div className="d-flex gap-2 ">
                        
                         <button type="button" className="btn btn-warning btn-wave">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                            <a href="/balance"><span>Kembali</span></a>
                        </button>
                         <button type="button" className="btn btn-info btn-wave">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                          <a href="create-invoice.html"><span>Tambah Invoices</span></a>
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-info   dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Import
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);">Export</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Print</a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                            
                       
                     

                    </div>
                </div>

                <div className="row row-sm">
						<div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
							<div className="card sales-card circle-image1">
								<div className="row">
									<div className="col-8">
										<div className="ps-4 pt-4 pe-3 pb-4 pt-0">
											<div className="">
												<p className="mb-2 fs-12 fw-semibold">SALDO</p>
											</div>
											<div className="pb-0 mt-0">
												<div className="d-flex">
													<h4 className="fs-26 fw-semibold mb-2">5,74,12</h4>
												</div>
												<p className="mb-0 fs-12 text-muted">Last week<i className="fas fa-arrow-circle-up mx-2 text-success"></i>
													<span className=" text-primary"> +427</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div className="circle-icon widget bg-primary text-center align-self-center shadow-primary overflow-hidden">
											<i className="fe fe-shopping-bag fs-20 lh-lg text-fixed-white"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
							<div className="card sales-card circle-image2">
								<div className="row">
									<div className="col-8">
										<div className="ps-4 pt-4 pe-3 pb-4 pt-0">
											<div className="">
												<p className="mb-2 fs-12 fw-semibold">MASUK</p>
											</div>
											<div className="pb-0 mt-0">
												<div className="d-flex">
													<h4 className="fs-26 fw-semibold mb-2">$47,589</h4>
												</div>
												<p className="mb-0 fs-12 text-muted">Last week<i className="fas fa-arrow-circle-down mx-2 text-danger"></i>
													<span className=" text-success"> -453</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div className="circle-icon widget bg-info text-center align-self-center shadow-info overflow-hidden">
											<i className="fe fe-dollar-sign fs-20 lh-lg text-fixed-white"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
							<div className="card sales-card circle-image3">
								<div className="row">
									<div className="col-8">
										<div className="ps-4 pt-4 pe-3 pb-4 pt-0">
											<div className="">
												<p className="mb-2 fs-12 fw-semibold">KELUAR</p>
											</div>
											<div className="pb-0 mt-0">
												<div className="d-flex">
													<h4 className="fs-26 fw-semibold mb-2">$8,943</h4>
												</div>
												<p className="mb-0 fs-12 text-muted">Last week<i className="fas fa-arrow-circle-up mx-2 text-success"></i>
													<span className=" text-primary"> +788</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div className="circle-icon widget bg-success text-center align-self-center shadow-success overflow-hidden ">
											<i className="fe fe-external-link fs-20 lh-lg text-fixed-white"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
							<div className="card sales-card circle-image4">
								<div className="row">
									<div className="col-8">
										<div className="ps-4 pt-4 pe-3 pb-4 pt-0">
											<div className="">
												<p className="mb-2 fs-12 fw-semibold">NET</p>
											</div>
											<div className="pb-0 mt-0">
												<div className="d-flex">
													<h4 className="fs-26 fw-semibold mb-2">5,74.12</h4>
												</div>
												<p className="mb-0 fs-12  text-muted">Last week<i className="fas fa-arrow-circle-down mx-2 text-danger"></i>
													<span className=" text-success"> -693</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div className="circle-icon widget bg-warning text-center align-self-center warning-success overflow-hidden">
											<i className="fe fe-credit-card fs-20 lh-lg text-fixed-white"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <div className="d-flex gap-2">
                        <button type="button" className="btn btn-outline-light btn-wave">
                        <i className="bi bi-filter"></i>
                            Filter
                        </button>
                        <button type="button" className="btn btn-outline-light btn-wave">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                 
                   
                    <div className="d-flex gap-2">

                        <div className="">
                            <input type="search" className="form-control" id="input-search" placeholder="Search"></input>
                        </div>
                        <div>
                            <input type="date" className="form-control" id="input-date"></input>
                        </div>
                        <div>
                            <input type="date" className="form-control" id="input-date"></input>
                        </div>
                    </div>
                    
                   

                </div>

                <div className="d-flex align-items-center justify-content-between gap-1 mb-2">
                 

                    <div className="d-flex gap-2">
                        
                     
                        <button type="button" className="btn btn-danger btn-wave">
                            <i className="bi bi-trash"></i>
                        </button>
                        <button type="button" className="btn btn-outline-light btn-wave">
                            <i className="bi bi-printer"></i>
                        </button>
                    </div>

                    <div className="gap-2 d-flex">
                        <button type="button" className="btn btn-outline-info btn-wave active">Semua</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Lunas</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Belum Dibayar</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Dibayar Sebagian</button>
                    </div>

                    
                </div>

                <div>
                    <div className="card custom-card">
                            <div className="card-body">
                                <div className="table-responsive">
                                <table id="responsiveDataTable" className="table text-nowrap" style={{ width:"100%" }}>
                                    <thead className="">
                                        <tr>
                                            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input></th>
                                            <th>Tanggal</th>
                                            <th>Deskripsi</th>
                                            <th>Refrensi</th>
                                            <th>Tag</th>
                                            <th>Terima</th>
                                            <th>Kirim</th>
                                            <th>Saldo</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."></input></th>
                                            <td>12 Juni 2025</td>
                                            <td>Terima pembayaran tagihan: Hana INV/00001</td>
                                            <td></td>
                                            <td>14 September 2015</td>
                                            <td>Rp5.456.000.000</td>
                                            <td></td>
                                             <td>Rp5.456.000.000</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Paid</span>
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."></input></th>
                                            <td>13 Juni 2025</td>
                                            <td>Terima pembayaran tagihan: Hana INV/00001</td>
                                            <td></td>
                                            <td>15 Agustus 2025</td>
                                            <td>Rp376.000.000</td>
                                            <td></td>
                                            <td>Rp376.000.000</td>
                                            <td>
                                                <span className="badge bg-danger-transparent">Overdue</span>
                                            </td>
                                           
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."></input></th>
                                            <td>14 Juni 2025</td>
                                            <td>Terima pembayaran tagihan: Hana INV/00001</td>
                                            <td></td>
                                            <td>16 September 2025</td>
                                            <td>Rp2.180.000.000</td>
                                            <td></td>
                                            <td>Rp2.180.000.000</td>
                                            <td>
                                                <span className="badge bg-warning-transparent">Pending</span>
                                            </td>
                                           
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."></input></th>
                                            <td>15 Juni 2025</td>
                                            <td>Terima pembayaran tagihan: Hana INV/00001</td>
                                            <td></td>
                                            <td>17 September 2025</td>
                                            <td>Rp7.899.000.000</td>
                                            <td></td>
                                            <td>Rp7.899.000.000</td>
                                            <td>
                                                <span className="badge bg-success-transparent">Paid</span>
                                            </td>
                                           
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
                
                                    <div className="d-flex justify-content-end">

                                        <nav aria-label="Page navigation" className=" pagination-style-4">
                                            <ul className="pagination flex-wrap">
                                                <li className="page-item p-1 disabled">
                                                    <a className="page-link" href="javascript:void(0);">
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item p-1 active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                                <li className="page-item p-1"><a className="page-link" href="javascript:void(0);">2</a></li>
                                                <li className="page-item p-1">
                                                    <a className="page-link" href="javascript:void(0);">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item p-1"><a className="page-link" href="javascript:void(0);">16</a></li>
                                                <li className="page-item p-1"><a className="page-link" href="javascript:void(0);">17</a></li>
                                                <li className="page-item p-1">
                                                    <a className="page-link text-primary" href="javascript:void(0);">
                                                        next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                               
                                        
                
				</div>
				{/* <!-- /Container --> */}
			</div>
			{/* <!-- /main-content --> */}

       
        {/* <!-- Footer Start --> */}
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span> Copyright © <span id="year"></span> <a
                        href="javascript:void(0);" className="text-primary">Nowa</a>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="javascript:void(0);">
                        <span className="fw-semibold text-decoration-underline">Spruko</span>
                    </a> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
        {/* <!-- Footer End -->
        <!-- Start Rightsidebar --> */}
        <div className="sidebar offcanvas offcanvas-end" tabIndex={-1} id="sidebar-canvas" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom bg-light">
                <h6 className="offcanvas-title text-default" id="offcanvasRightLabel22">NOTIFICATIONS</h6>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0">
                <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                    <div className="tabs-menu p-3">
                        {/* <!-- Tabs --> */}
                        <ul className="nav panel-tabs">
                            <li className=""><a href="#side1" className="active" data-bs-toggle="tab"><svg xmlns="http://www.w3.org/2000/svg"  className="side-menu__icon" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg> Chat</a></li>
                            <li className=""><a href="#side2" data-bs-toggle="tab"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  className="side-menu__icon"  height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,18.5c0.83,0,1.5-0.67,1.5-1.5h-3C10.5,17.83,11.17,18.5,12,18.5z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10 c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8c4.41,0,8,3.59,8,8S16.41,20,12,20z M16,11.39 c0-2.11-1.03-3.92-3-4.39V6.5c0-0.57-0.43-1-1-1s-1,0.43-1,1V7c-1.97,0.47-3,2.27-3,4.39V14H7v2h10v-2h-1V11.39z M14,14h-4v-3 c0-1.1,0.9-2,2-2s2,0.9,2,2V14z"/></g></svg> Notifications</a></li>
                            <li className=""><a href="#side3" data-bs-toggle="tab"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  className="side-menu__icon"  height="24" version="1.1" width="24"  viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11C11.17,11 10.5,10.33 10.5,9.5C10.5,8.67 11.17,8 12,8C12.83,8 13.5,8.67 13.5,9.5C13.5,10.33 12.83,11 12,11Z" /></svg> Friends</a></li>
                    </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active p-0 border-0" id="side1">
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-primary rounded-circle avatar-md">CH</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);" >
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/12.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/1.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/2.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/8.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/11.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/6.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/9.jpg" alt="img"></img>
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
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/9.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Mozelle Belt</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/11.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Florinda Carasco</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded" ><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/10.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Alina Bernier</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/2.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Zula Mclaughin</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/13.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Isidro Heide</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/12.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Mozelle Belt</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded" ><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/4.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Florinda Carasco</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/7.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Alina Bernier</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded" ><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/2.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Zula Mclaughin</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded" ><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/14.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Isidro Heide</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded" ><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/11.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Florinda Carasco</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/9.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Alina Bernier</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/15.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Zula Mclaughin</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex  align-items-center border-0">
                                    <div className="me-2">
                                        <img className="avatar avatar-md rounded-circle cover-image" src="../assets/images/faces/4.jpg" alt="img"></img>
                                    </div>
                                    <div className="">
                                        <div className="font-weight-semibold">Isidro Heide</div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-light btn-rounded"><i className="fe fe-message-square fs-16"></i></a>
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
        </>
    )
}