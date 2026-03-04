import Breadcrumb from "@/components/Breadcumb";
import Link from "next/link";

export default function CreateProduct() {
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
                            <h3 className="mb-3">Tambah Produk</h3>
                        </div>
                                        
                    <div className="d-flex gap-2 ">
                                            
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-info   dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Panduan
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
                            
                     
                        <button type="button" className="btn btn-teal d-flex gap-1 align-items-center btn-wave">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                          <Link href="/product">Kembali</Link>
                        </button>

                    </div>
                </div>

                 <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-body">
                                    <div className="row gy-4">

                                       
                                       
                                         <div className="w-full">
                                            <label htmlFor="input-file" className="form-label">Type File</label>
                                            <input className="form-control" type="file" id="input-file"></input>
                                        </div>
                                         <div className="w-full">
                                            <label htmlFor="input-placeholder" className="form-label">Nama Produk</label>
                                            <input type="text" className="form-control" id="input-placeholder" placeholder="Input Nama Produk"></input>
                                        </div>
                                         <div className="w-full">
                                                <label htmlFor="text-area" className="form-label">Deskripsi</label>
                                                <textarea className="form-control" id="text-area" rows={1}></textarea>
                                            </div>
                                        
                                        
                                        
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="input-date" className="form-label">Kategori</label>
                                            <select className="form-control" data-trigger name="choices-single-groups" id="choices-single-groups" value="Pilih Kategori">
                                            <option value="">Pilih Kategori</option>
                                            <optgroup label="">
                                                <option value="Paris">Cash</option>
                                                <option value="Lyon">Transfer</option>
                                                <option value="Marseille">Termin</option>
                                                <option value="Marseille">Kredit</option>
                                            </optgroup>
                                        </select>
                                        </div>
                                    
                                    
                                        
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="input-date" className="form-label">Satuan</label>
                                            <select className="form-control" data-trigger name="choices-single-groups" id="choices-single-groups" value="Cash">
                    
                                                <optgroup label="">
                                                <option value="Paris">Pcs</option>
                                                <option value="Lyon">Unpaid</option>
                                                <option value="Marseille">Partial</option>
                                                
                                            </optgroup>
                                        </select>
                                        </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor="input-date" className="form-label">Kode/SKU</label>
                                            <input className="form-control" type="text" placeholder="" value="" id="input-file"></input>
                                        </div>

                                        <div className="d-flex gap-4">

                                        <div className="w-100">
                                            <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                                <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked></input>
                                                <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Saya Membeli Item Ini</span>
                                            </div>

                                             <div className="w-100">
                                            <label htmlFor="input-date" className="form-label">Harga</label>
                                            <input className="form-control" type="text" placeholder="" value="" id="input-file"></input>
                                        </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                                <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked></input>
                                                <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Saya Menjual Item Ini</span>
                                            </div>

                                             <div className="w-100">
                                            <label htmlFor="input-date" className="form-label">Harga</label>
                                            <input className="form-control" type="text" placeholder="" value="" id="input-file"></input>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">

                                        <button type="button" className="btn btn-success btn-wave w-25">
                                            <i className="bi bi-save2 me-2"></i>
                                            Simpan
                                        </button>
                                    </div>

                                      
                                    
                            </div>
                                    
                        <div className="card-footer d-none border-top-0">

                                    
{/* <!-- Prism Code --> */}
<pre className="language-html"><code className="language-html">&lt;div className="row gy-4"&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;p className="mb-2 text-muted"&gt;Basic Input:&lt;/p&gt;
        &lt;input type="text" className="form-control" id="input"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-label" className="form-label"&gt;Form Input With Label&lt;/label&gt;
        &lt;input type="text" className="form-control" id="input-label"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-placeholder" className="form-label"&gt;Form Input With Placeholder&lt;/label&gt;
        &lt;input type="text" className="form-control" id="input-placeholder" placeholder="Placeholder"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-text" className="form-label"&gt;Type Text&lt;/label&gt;
        &lt;input type="text" className="form-control" id="input-text" placeholder="Text"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-number" className="form-label"&gt;Type Number&lt;/label&gt;
        &lt;input type="number" className="form-control" id="input-number" placeholder="Number"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-password" className="form-label"&gt;Type Password&lt;/label&gt;
        &lt;input type="password" className="form-control" id="input-password" placeholder="Password"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-email" className="form-label"&gt;Type Email&lt;/label&gt;
        &lt;input type="email" className="form-control" id="input-email" placeholder="Email@xyz.com"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-tel" className="form-label"&gt;Type Tel&lt;/label&gt;
        &lt;input type="tel" className="form-control" id="input-tel" placeholder="+1100-2031-1233"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-date" className="form-label"&gt;Type Date&lt;/label&gt;
        &lt;input type="date" className="form-control" id="input-date"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-week" className="form-label"&gt;Type Week&lt;/label&gt;
        &lt;input type="week" className="form-control" id="input-week"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-month" className="form-label"&gt;Type Month&lt;/label&gt;
        &lt;input type="month" className="form-control" id="input-month"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-time" className="form-label"&gt;Type Time&lt;/label&gt;
        &lt;input type="time" className="form-control" id="input-time"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-datetime-local" className="form-label"&gt;Type datetime-local&lt;/label&gt;
        &lt;input type="datetime-local" className="form-control" id="input-datetime-local"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-search" className="form-label"&gt;Type Search&lt;/label&gt;
        &lt;input type="search" className="form-control" id="input-search" placeholder="Search"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-submit" className="form-label"&gt;Type Submit&lt;/label&gt;
        &lt;input type="submit" className="form-control" id="input-submit" value="Submit"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-reset" className="form-label"&gt;Type Reset&lt;/label&gt;
        &lt;input type="reset" className="form-control" id="input-reset"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-button" className="form-label"&gt;Type Button&lt;/label&gt;
        &lt;input type="button" className="form-control btn btn-primary" id="input-button"  value="Button"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;div className="row"&gt;
            &lt;div className="col-xl-4"&gt;
                &lt;label className="form-label"&gt;Type Color&lt;/label&gt;
                &lt;input className="form-control form-input-color" type="color" value="#136bd0"&gt;
            &lt;/div&gt;
            &lt;div className="col-xl-4"&gt;
                &lt;div className="form-check"&gt;
                    &lt;p className="mb-3 px-0 text-muted"&gt;Type Checkbox&lt;/p&gt;
                    &lt;input className="form-check-input ms-2" type="checkbox" value="" checked=""&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="col-xl-3"&gt;
                &lt;div className="form-check"&gt;
                    &lt;p className="mb-3 px-0 text-muted"&gt;Type Radio&lt;/p&gt;
                    &lt;input className="form-check-input ms-2" type="radio" checked=""&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-file" className="form-label"&gt;Type File&lt;/label&gt;
        &lt;input className="form-control" type="file" id="input-file"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label className="form-label"&gt;Type Url&lt;/label&gt;
        &lt;input className="form-control" type="url"  name="website" placeholder="http://example.com"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-disabled" className="form-label"&gt;Type Disabled&lt;/label&gt;
        &lt;input type="text" id="input-disabled" className="form-control" placeholder="Disabled input" disabled=""&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-readonlytext" className="form-label"&gt;Input Readonly Text&lt;/label&gt;
        &lt;input type="text" readonly="" className="form-control-plaintext" id="input-readonlytext" value="email@example.com"&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="disabled-readonlytext" className="form-label"&gt;Disabled Readonly Input&lt;/label&gt;
        &lt;input className="form-control" type="text" value="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled="" readonly=""&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label className="form-label"&gt;Type Readonly Input&lt;/label&gt;
        &lt;input className="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly=""&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="text-area" className="form-label"&gt;Textarea&lt;/label&gt;
        &lt;textarea className="form-control" id="text-area" rows="1"&gt;&lt;/textarea&gt;
    &lt;/div&gt;
    &lt;div className="col-xl-4 col-lg-6 col-md-6 col-sm-12"&gt;
        &lt;label for="input-DataList" className="form-label"&gt;Datalist example&lt;/label&gt;
        &lt;input className="form-control" list="datalistOptions" id="input-DataList" placeholder="Type to search..."&gt;
        &lt;datalist id="datalistOptions"&gt;
            &lt;option value="San Francisco"&gt;
            &lt;/option&gt;
            &lt;option value="New York"&gt;
            &lt;/option&gt;
            &lt;option value="Seattle"&gt;
            &lt;/option&gt;
            &lt;option value="Los Angeles"&gt;
            &lt;/option&gt;
            &lt;option value="Chicago"&gt;
            &lt;/option&gt;
        &lt;/datalist&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
{/* <!-- Prism Code --> */}
                                </div>
                            </div>
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
        {/* <!-- Footer End --> */}
        {/* <!-- Start Rightsidebar --> */}
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
    </div>
        </>
    )
}