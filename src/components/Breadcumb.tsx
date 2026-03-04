"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Breadcrumb() {
  const pathname = usePathname()

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment)

  return (
    <div className="breadcrumb-header  justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          {pathSegments.length > 0
            ? pathSegments[pathSegments.length - 1].toUpperCase()
            : "DASHBOARD"}
        </span>
      </div>

      <div className="justify-content-center d-flex align-items-center mt-2"> 
        <ol className="breadcrumb d-flex align-items-center">
          <li className="breadcrumb-item fs-15">
            <Link href="/dashboard">Dashboard</Link>
          </li>

          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/")

            const isLast = index === pathSegments.length - 1

            return (
              <li
                key={href}
                className={`breadcrumb-item fs-15 ${isLast ? "active" : ""}`}
              >
                {isLast ? (
                  segment
                ) : (
                  <Link href={href}>{segment}</Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}