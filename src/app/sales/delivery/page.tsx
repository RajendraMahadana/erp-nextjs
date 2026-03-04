"use client";

import Breadcrumb from "@/components/Breadcumb";
import Link from "next/link";

export default function Delivery() {
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
                            <h3 className="mb-3">Sales Delivery</h3>
                        </div>
                                        
                    <div className="d-flex gap-2 ">
                                            
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-info   dropdown-toggle" data-bs-toggle="dropdown"
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
                                        
                        <button type="button" className="btn btn-info btn-wave">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                          <Link href="/sales/delivery/create"><span>Tambah Surat Jalan</span></Link>
                        </button>

                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="gap-2 d-flex">
                        <button type="button" className="btn btn-outline-teal btn-wave active">Semua</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Terkirim</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Dalam Perjalanan</button>
                        <button type="button" className="btn btn-outline-light btn-wave">Tertunda</button>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-outline-light btn-wave">
                        <i className="bi bi-filter"></i>
                            Filter
                        </button>
                        <button type="button" className="btn btn-outline-light btn-wave">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>

                </div>
                 <div className="d-flex align-items-center justify-content-between gap-1 mb-2">
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-info btn-wave">
                            <i className="bi bi-send"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-wave">
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                <div className="w-25">
                        <input type="search" className="form-control" id="input-search" placeholder="Search"></input>
                    </div>
                </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="deliveryTable" className="table text-nowrap text-center" style={{ width:"100%" }}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>No Delivery</th>
                                                <th>Tanggal</th>
                                                <th>Customer</th>
                                                <th>Alamat Tujuan</th>
                                                <th>Jumlah Barang</th>
                                                <th>Status</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input></th>
                                                <td><Link href="/sales/delivery/detail">DO/2025/0001</Link></td>
                                                <td>12 Juni 2025</td>
                                                <td>PT Jaya Abadi</td>
                                                <td>Jakarta</td>
                                                <td>120</td>
                                                <td><span className="badge bg-success-transparent">Terkirim</span></td>
                                                <td>
                                                    <div className="gap-2 d-flex justify-content-center">

                                                    <button className="btn btn-sm btn-info"><i className="ri-edit-line"></i></button>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                                            Aksi Lain
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="detail_delivery.html">Details</a></li>
                                                            <li><a className="dropdown-item" href="#">Cetak</a></li>
                                                            <li><a className="dropdown-item" href="#">Download PDF</a></li>
                                                        </ul>
                                                    </div>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input></th>
                                                <td>DO/2025/0002</td>
                                                <td>13 Juni 2025</td>
                                                <td>CV. Maju Jaya</td>
                                                <td>Bandung</td>
                                                <td>56</td>
                                                <td><span className="badge bg-warning-transparent">Dalam Perjalanan</span></td>
                                                <td>
                                                    <div className="gap-2 d-flex justify-content-center">

                                                    <button className="btn btn-sm btn-info"><i className="ri-edit-line"></i></button>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                                            Aksi Lain
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="detail_delivery.html">Details</a></li>
                                                            <li><a className="dropdown-item" href="#">Cetak</a></li>
                                                            <li><a className="dropdown-item" href="#">Download PDF</a></li>
                                                        </ul>
                                                    </div>

                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input></th>
                                                <td>DO/2025/0003</td>
                                                <td>14 Juni 2025</td>
                                                <td>PT Sejahtera</td>
                                                <td>Surabaya</td>
                                                <td>78</td>
                                                <td><span className="badge bg-danger-transparent">Tertunda</span></td>
                                                <td>
                                                    <div className="gap-2 d-flex justify-content-center">

                                                    <button className="btn btn-sm btn-info"><i className="ri-edit-line"></i></button>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                                            Aksi Lain
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="detail_delivery.html">Details</a></li>
                                                            <li><a className="dropdown-item" href="#">Cetak</a></li>
                                                            <li><a className="dropdown-item" href="#">Download PDF</a></li>
                                                        </ul>
                                                    </div>

                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
        </>
    )
}