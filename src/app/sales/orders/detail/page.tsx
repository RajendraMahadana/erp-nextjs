import Breadcrumb from "@/components/Breadcumb";
import Link from "next/link";

export default function DeatailOrder() {
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
                            <h3 className="mb-3">Detail Surat Jalan</h3>
                        </div>
                                        
                </div>
                <div className="card-footer d-flex justify-content-end">
                                <div className="btn-list">
                                    <button type="button" className="btn ripple btn-info mb-1"><i className="fe fe-printer me-1"></i> Print Delivery</button>
                                    <button type="button" className="btn ripple btn-secondary mb-1"><i className="fe fe-send me-1"></i> Send Delivery</button>
                                    <button type="button" className="btn ripple btn-info mb-1">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
                                    <Link href="/sales/orders">Kembali</Link>
                                    </button>
                                </div>
                </div>

                <div className="row row-sm">
                    <div className="col-lg-12 col-md-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-lg-flex">
                                    <h6 className="main-content-label mb-1">
                                        <span className="d-flex mb-4">
                                            <a href="index.html">
                                                <img src="../assets/images/brand-logos/toggle-logo.png" className="sign-favicon ht-40" alt="logo"></img>
                                            </a>
                                        </span>
                                    </h6>
                                    <div className="ms-auto">
                                        <p className="mb-1"><span className="fw-bold">Delivery No : #DO/2025/0001	</span></p>
                                    </div>
                                </div>
                                <div className="row row-sm">
                                    <div className="col-lg-6">
                                        <p className="h3">Delivery From:</p>
                                        <address>
                                            Gudang Pusat<br></br>
                                            Jakarta, Indonesia<br></br>
                                            Region, Postal Code<br></br>
                                            warehouse@example.com
                                        </address>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <p className="h3">Delivery To:</p>
                                        <address>
                                            PT. Jaya Abadi<br></br>
                                            Jl. Merdeka No.123<br></br>
                                            Jakarta Pusat, Indonesia<br></br>
                                            customer@example.com
                                        </address>
                                        <div className="">
                                            <p className="mb-1"><span className="fw-bold">Delivery Date :</span></p>
                                            <address>
                                                26th August 2025
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive mg-t-40">
                                    <table className="table table-invoice table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="wd-20p">Product</th>
                                                <th className="wd-40p">Description</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Proyektor Epson X200</td>
                                                <td className="fs-12">Projector multimedia untuk presentasi</td>
                                                <td className="text-center">60</td>
                                                <td className="text-center">Unit</td>
                                            </tr>
                                            <tr>
                                                <td>Laptop Lenovo</td>
                                                <td className="fs-12">Laptop Thinkpad Core i5</td>
                                                <td className="text-center">60</td>
                                                <td className="text-center">Unit</td>
                                            </tr>
                                            <tr>
                                                <td className="valign-middle" colSpan={4}>
                                                    <div className="invoice-notes">
                                                        <label className="main-content-label fs-13">Notes</label>
                                                        <p className="text-dark">Barang dikirim dalam kondisi baik, harap dicek saat penerimaan.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}