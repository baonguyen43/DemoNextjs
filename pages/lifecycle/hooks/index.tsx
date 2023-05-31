import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Button from "../../../components/Button";
import useConstructor from "../../../custom hook//useContructor";
//useMemo trả về value, useCallback trả về hàm
//Destructring phân rã array thành 2 phần tử: 1: giá trị state, 2: set lại state

//Hook: tạo contructor: Cách 1: tạo biến toàn cục isRun - check
let isRun = false;
const Lifecycle = () => {
  //state bên class gộp chung 1 object => set state set 1 phần
  //state bên hook tách riêng nhiều state => set state thì set cho từng cái
  //khác biệt với constructor của class=> chạy lại nhiều lần

  //   console.log(" constructor ? ");
  //constructor chạy trước khi render, useEffect chạy sau khi render
  //useEffect chỉ chạy ở client , constructor chạy ở server & client

  //Hook: tạo contructor: Cách 3: useMemo chạy như contructor nhưng chỉ chạy 1 lần
  useMemo(() => {
    console.log("Tạo constructor cách 3");
  }, []);
  //Hook: tạo contructor: Cách 4:
  //Tao CustomHook -> useContructor
  //useContructor nhận 1 function call back
  //Function này chỉ dc gọi 1 lần duy nhất
  //useContructor(()=>{xử lí})
  useConstructor(() => {
    console.log("Tạo constructor cách 4 ");
  });
  //Hook: tạo contructor: Cách 2: sử dụng useRef(tạo cho mình Object - tồn tại suot chu kỳ sống của component )
  //truy xuất thông qua biến current
  const isRunHook = useRef(false);
  const inputFileEl = useRef(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState({
    firstName: "Le",
    lastName: "Nguyen", //4.1 kết nối 2 thàng này lại, nối chuỗi
  });
  if (isRunHook.current === false) {
    console.log("Tạo constructor cách 2");
    isRunHook.current = true;
  }

  if (isRun === false) {
    console.log("Tạo constructor cách 1 ");
    isRun = true;
  }
  //lắng nghe toàn bộ phần tử
  //   useEffect(() => {
  //     // <=> Didmount & DidUpdate bên class
  //     console.log("useEffect run "); //hàm này chạy sau khi render xong
  //     return () => {
  //       // function này = cycle componentWillUnMount  <=> Component sẽ bị remove khỏi cấu trúc DOM
  //     };
  //   });
  //   const fullName = user.firstName + "" + user.lastName; //4.2 luôn luôn tạo mới sau mỗi lần render

  //4.2.1 Không nen lạm dụng, chỉ những biểu thức tính toán phức tạp
  const fullName = useMemo(() => {
    return user.firstName + "" + user.lastName;
  }, [user]); //4.3 dùng useMemo để chuyển đổi và tính toán
  //useMemo catch lại dữ liệu
  //nếu bản thân user thay đổi dữ liệu nó sẽ thay đổi lại
  //nếu user ko thay đổi thì lấy giá trị cũ

  //   useEffect(() => {
  //     console.log("Run bất kể state nào thay đổi - ");
  //   }); //ko có mảng
  //   useEffect(() => {
  //     //chay 1 lan duy nhất sau khi render lan dau tien,
  //     console.log("use effect run  - empty deps");
  //   }, []); //truyền empty dependencies

  //   useEffect(() => {
  //     console.log("lắng nghe sự thay doi cua Count");
  //   }, [count]); // ko truyền deps mà truyền count
  //   useEffect(() => {
  //     console.log("Lắng nghe sự thay đổi của Visible");
  //   }, [visible]); // ko truyền deps mà truyền visible
  //   useEffect(() => {
  //     console.log("Lắng nghe sự thay đổi 2 state");
  //   }, [visible, count]); // ko truyền deps mà truyền visible

  console.log("truoc khi return <=> render");
  return (
    <>
      <h1> Life cycle - React Hooks {fullName} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
          // truyền hàm
          //   setCount((previousCount) => {
          //     // nhận vào giá trị cũ
          //     return previousCount + 1; // return về giá trị mới, đang return con số
          //   });
        }}
      >
        Counter ADD
      </button>
      <p> {count} </p>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        {" "}
        hide button{" "}
      </button>
      {
        // biểu thức điều kiện visible true mới show ra
        visible && <Button />
      }
      <hr />
      {/* ẨN giao diện  */}
      <input
        style={{
          opacity: 0,
          visibility: "hidden",
          position: "fixed",
          left: " -1000px",
        }}
        type="file"
        // ref={inputFileEl}           //ko sử dụng ref, vẫn dùng javascript thong thuong
      />

      {/* cho người dùng thao tác  */}
      <button
        onClick={() => {
          console.log(inputFileEl.current);
          //   inputFileEl.current.click();
          const input = document.querySelector(
            'input[type="file"'
          ) as HTMLInputElement;
          input.click(); //báo trình biên dịch biết ^ là HTMLInput luôn
        }}
        className="upload"
      >
        Upload Image{" "}
      </button>
    </>
  );
  // return(
  //     <>
  //     <h1> lifecycle - React Hooks </h1>
  //     <button onClick={() =>{
  //         setCount(count+1)
  //     }}> Counter Add </button>
  //     <p> {count} </p>
  //     </>
  // )
};
export default Lifecycle;

// có thể gộp có thể dùng nhưng ko khuyến cáo dùng
// const [state,setState] = useState(
//     {
//         counter:0,
//         visible: true
//     }
// )
//     return(
//         <>
//         <button onClick={()=> {
//             setState({
//                 counter: state.counter +1, //
//                 visible: true
//             })
//         }}>
//             CounterAdd
//         </button>
//         </>
//     )
