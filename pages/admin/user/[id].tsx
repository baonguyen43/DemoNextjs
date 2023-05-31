import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

//demo Client Side Rendering
export default function AdminUser() {
  const router = useRouter();
  console.log("router", router.query.id);
  function handOnClick() {
    router.push("/");
  }
  return (
    <>
      <ul>
        <h1> Admin - user page -id {router.query.id} </h1>
        {/* -- sử dụng hàm để link  */}
        <li>
          <button onClick={handOnClick}> Go Home </button>{" "}
        </li>
        {/* SỬ dụng thẻ a để link  */}
        <li>
          {" "}
          <a href="/"> Go home by href</a>{" "}
        </li>
        {/* Sử dụng next link để link  */}
        <li>
          <Link href="/"> Go by Next Link </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/">
            <a className="active">Go by Next Link best way</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
// sau nay hoc data fetching => server side rendering
//server side rendering: lấy dc id ở phía server ko cần chờ client xử lí
