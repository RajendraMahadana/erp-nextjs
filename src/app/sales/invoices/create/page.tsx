import Breadcrumb from "@/components/Breadcumb";
import Link from "next/link";

export default function CreateInvoice() {
    return (
        <>
            <div className="">

                {/* <!-- container --> */}
                <div className="main-container container-fluid">

                    {/* <!-- breadcrumb --> */}
                    <Breadcrumb />
                    {/* <!-- /breadcrumb --> */}


                    <div className="d-flex align-items-center mb-3 justify-content-between">
                        <div>
                            <h3 className="mb-3">Tambah Invoice Penjualan</h3>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                                <Link href="/sales/invoices">Kembali</Link>
                            </button>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-body">
                                    <div className="row gy-4">

                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label className="form-label">No. Invoice</label>
                                            <input className="form-control" type="text" value="INV/2025/0003" aria-label="readonly input example" readOnly></input>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor={"inputDate"} className="form-label">Tanggal Invoice</label>
                                            <input type="date" className="form-control" id="input-date"></input>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor={"inputDate"} className="form-label">Customer</label>
                                            <select className="form-control" data-trigger name="choices-single-groups" id="choices-single-groups">
                                                <option value="">Pilih Customer</option>
                                                <optgroup label="Customers">
                                                    <option value="London">London</option>
                                                    <option value="Manchester">Manchester</option>
                                                    <option value="Liverpool">Liverpool</option>
                                                </optgroup>
                                                <optgroup label="Vendors">
                                                    <option value="Paris">Paris</option>
                                                    <option value="Lyon">Lyon</option>
                                                    <option value="Marseille">Marseille</option>
                                                </optgroup>
                                            </select>
                                        </div>



                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor={"inputDate"} className="form-label">Metode Pembayaran</label>
                                            <select className="form-control" data-trigger name="choices-single-groups" id="choices-single-groups" value="Cash">
                                                <option value="">Cash</option>
                                                <optgroup label="">
                                                    <option value="Paris">Cash</option>
                                                    <option value="Lyon">Transfer</option>
                                                    <option value="Marseille">Termin</option>
                                                    <option value="Marseille">Kredit</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor={"inputDate"} className="form-label">Jatuh Tempo</label>
                                            <input type="date" className="form-control" id="input-date"></input>
                                        </div>


                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label htmlFor={"inputDate"} className="form-label">Status Pembayaran </label>
                                            <select className="form-control" data-trigger name="choices-single-groups" id="choices-single-groups" value="Cash">

                                                <optgroup label="">
                                                    <option value="Paris">Paid</option>
                                                    <option value="Lyon">Unpaid</option>
                                                    <option value="Marseille">Partial</option>

                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="d-flex justify-content-between gap-4">

                                            <div className="w-100 ">
                                                <label htmlFor={"text-area"} className="form-label">Catatan</label>
                                                <textarea className="form-control" id="text-area" rows={1}></textarea>
                                            </div>
                                            <div className="w-100 ">
                                                <label htmlFor={"input-text"} className="form-label">Tautan Invoice</label>
                                                <input type="text" className="form-control" id="input-text" placeholder="Link" value="https/cration.com" readOnly></input>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">

                                                <div className="p-3">
                                                    <div className="">
                                                        <div className="table-responsive">
                                                            <table className="table align-middle text-nowrap">
                                                                <thead className=" table-active">
                                                                    <tr>
                                                                        <th scope="col">Produk</th>
                                                                        <th scope="col">Deskripsi</th>
                                                                        <th scope="col">Qty</th>
                                                                        <th scope="col">Satuan</th>
                                                                        <th scope="col">Harga</th>
                                                                        <th scope="col">Pajak</th>
                                                                        <th scope="col">Diskon</th>
                                                                        <th scope="col">Jumlah</th>
                                                                        <th scope="col"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <select className="form-select form-select-sm">
                                                                                <option selected>Choose...</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <textarea className="form-control form-control-sm" rows={1}></textarea>
                                                                        </td>
                                                                        <td>
                                                                            <input type="number" className="form-control = form-control-sm" />
                                                                        </td>
                                                                        <td>
                                                                            <select className="form-select form-select-sm">
                                                                                <option selected>Satuan</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <input type="number" className="form-control form-control-sm" />
                                                                        </td>
                                                                        <td>
                                                                            <select className="form-select form-select-sm     ">
                                                                                <option selected>Choose...</option>
                                                                                <option selected>PPN</option>
                                                                                <option value="">PPH</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className="form-control form-control-sm" value="0%" />
                                                                        </td>
                                                                        <td>
                                                                            <input type="text" className="form-control form-control-sm" />
                                                                        </td>
                                                                        <td>
                                                                            <button className="btn btn-danger">
                                                                                <i className="ri-delete-bin-line"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-1">
                                                    <button className="btn w-25 gap-1 d-flex align-items-center justify-content-center btn-info">
                                                        <i className="ri-add-line"></i> Tambah Baris
                                                    </button>
                                                </div>

                                                <div className="d-flex flex-column flex-md-row w-100 gap-4 mt-5 justify-content-between">
                                                    <div className="flex-column justify-content-between">

                                                        <div>
                                                            <span className="fs-5 fw-semibold">Keterangan</span>
                                                        </div>
                                                        <div className="card mt-3">
                                                            <div id="editor">
                                                                <h4><b className="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
                                                                <p><br></br></p>
                                                                <ol>
                                                                    <li className="ql-size-normal">Write text select and edit with multiple options.</li>
                                                                    <li className="">This is quill snow editor.</li>
                                                                    <li className="">Easy to customize and flexible.</li>
                                                                </ol>
                                                                <p><br></br></p>
                                                                <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className=" card custom-card">
                                                        <div className="  border-0">
                                                            <div className="card-body text-white">

                                                                {/* <!-- Sub Total --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <span className="text-dark">Sub Total</span>
                                                                    <span className="fw-bold">1.393.000</span>
                                                                </div>

                                                                {/* <!-- Diskon --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <span className="text-dark">Diskon per item</span>
                                                                    <span>69.650</span>
                                                                </div>

                                                                {/* <!-- Tambahan Diskon --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <a href="#" className="text-primary text-decoration-none fw-semibold">+ Tambahan Diskon</a>
                                                                </div>

                                                                {/* <!-- Pajak --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <span className="text-dark">PPN 11%</span>
                                                                    <span>145.569</span>
                                                                </div>

                                                                {/* <!-- Biaya pengiriman --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <a href="#" className="text-primary text-decoration-none fw-semibold">+ Biaya pengiriman</a>
                                                                </div>

                                                                {/* <!-- Biaya transaksi --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <a href="#" className="text-primary text-decoration-none fw-semibold">+ Biaya Transaksi</a>
                                                                </div>

                                                                {/* <!-- Total --> */}
                                                                <div className="d-flex justify-content-between py-3 border-bottom border-light">
                                                                    <span className=" fs-5 text-dark">Total</span>
                                                                    <span className="fs-26 fw-semibold text-dark">1.468.919</span>
                                                                </div>

                                                                {/* <!-- Potongan --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <a href="#" className="text-primary text-decoration-none fw-semibold">+ Pemotongan</a>
                                                                </div>

                                                                {/* <!-- Uang muka --> */}
                                                                <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                                                                    <a href="#" className="text-primary text-decoration-none fw-semibold">+ Uang muka</a>
                                                                </div>

                                                                {/* <!-- Sisa Tagihan --> */}
                                                                <div className="d-flex justify-content-between py-3 border-bottom border-light">
                                                                    <span className=" fs-5 text-dark">Sisa Tagihan</span>
                                                                    <span className="fs-26 fw-semibold text-dark">1.468.919</span>
                                                                </div>

                                                                {/* <!-- Tombol Simpan --> */}
                                                                <div className="mt-4">
                                                                    <button className="btn btn-info w-100  fw-semibold">
                                                                        <i className="bi bi-save me-2"></i> Simpan
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="card-footer d-none border-top-0">
                                                    {/* <!-- Prism Code --> */}
                                                    <pre className="language-html"><code className="language-html">&lt;div className="table-responsive"&gt;
                                                        &lt;table className="table text-nowrap"&gt;
                                                        &lt;thead className="table-success"&gt;
                                                        &lt;tr&gt;
                                                        &lt;th scope="col"&gt;User Name&lt;/th&gt;
                                                        &lt;th scope="col"&gt;Transaction Id&lt;/th&gt;
                                                        &lt;th scope="col"&gt;Created&lt;/th&gt;
                                                        &lt;th scope="col"&gt;Status&lt;/th&gt;
                                                        &lt;/tr&gt;
                                                        &lt;/thead&gt;
                                                        &lt;tbody&gt;
                                                        &lt;tr&gt;
                                                        &lt;th scope="row"&gt;Harshrath&lt;/th&gt;
                                                        &lt;td&gt;#5182-3467&lt;/td&gt;
                                                        &lt;td&gt;24 May 2022&lt;/td&gt;
                                                        &lt;td&gt;
                                                        &lt;button className="btn btn-sm btn-primary-light"&gt;Pending&lt;/button&gt;
                                                        &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                        &lt;th scope="row"&gt;Zozo Hadid&lt;/th&gt;
                                                        &lt;td&gt;#5182-3412&lt;/td&gt;
                                                        &lt;td&gt;02 July 2022&lt;/td&gt;
                                                        &lt;td&gt;
                                                        &lt;button className="btn btn-sm btn-primary-light"&gt;Pending&lt;/button&gt;
                                                        &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                        &lt;th scope="row"&gt;Martiana&lt;/th&gt;
                                                        &lt;td&gt;#5182-3423&lt;/td&gt;
                                                        &lt;td&gt;15 April 2022&lt;/td&gt;
                                                        &lt;td&gt;
                                                        &lt;button className="btn btn-sm btn-danger-light"&gt;Rejected&lt;/button&gt;
                                                        &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;tr&gt;
                                                        &lt;th scope="row"&gt;Alex Carey&lt;/th&gt;
                                                        &lt;td&gt;#5182-3456&lt;/td&gt;
                                                        &lt;td&gt;17 March 2022&lt;/td&gt;
                                                        &lt;td&gt;
                                                        &lt;button className="btn btn-sm btn-success-light"&gt;Processed&lt;/button&gt;
                                                        &lt;/td&gt;
                                                        &lt;/tr&gt;
                                                        &lt;/tbody&gt;
                                                        &lt;/table&gt;
                                                        &lt;/div&gt;</code></pre>
                                                    {/* <!-- Prism Code --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
                                    &lt;label htmlFor={"input-text"} className="form-label"&gt;Type Text&lt;/label&gt;
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
                                    &lt;label htmlFor={"inputDate"} className="form-label"&gt;Type Date&lt;/label&gt;
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
        </>
    )
}