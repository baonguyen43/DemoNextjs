import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
// import "../assets/style"; //imp cs module bằng webpack chưa dc
/*
pageProps = {
    users: [],
    posts: [],
    isLogin:true
}
{..pageProps}
*/

//~~1. Khai báo theo kiểu class compoment
// export default class CustomApp extends React.Component<AppProps> {
//   render() {
//     return (
//       <div className="root-app">
//         <Head>
//           <title>Create Next App</title>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="stylesheet" href="/globals.css" />
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     );
//   }
// }

//-2. Khai báo kiểu function compoment
const CustomAppFC: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};
export default CustomAppFC;

// function MyApp({ Component, pageProps }) {
//   //Thay vi viết 3 dòng, ta viết ...pageProps để trải hết ra
//   // return <Component
//   //       users = {pageProps.users}
//   //       posts = {pageProps.posts}
//   //       isLogin = {pageProps.isLogin}/>
//   return (
//     <div className="root-app">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/globals.css" />
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   );
// }
// export default MyApp;
