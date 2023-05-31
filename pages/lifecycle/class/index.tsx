import React, { Component } from "react";

type StateType = {
  counter: number;
  visible: boolean;
};

export default class Lifecycle extends Component<any, StateType> {
  //hàm constructor chạy đầu tiên chạy 1 lần duy nhất. Khi mà OBJECT của thằng class dc khởi tạo
  constructor(props) {
    //^^ đang kế thừa    Component của rea
    super(props); // gọi hàm constructor thông qua hàm super
    this.state = {
      // state: là data của nó, nó quản lí
      counter: 0, //props: data của nơi khác truyền vào, ko thay đổi dc
      visible: true,
    };
    console.log("constructor");
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  UNSAFE_componentWillUpdate() {
    //Tự kiểm tra mỗi cái state nào bị thay đổi
    //để thực hiện logic cho phù hợp
    //userid => call api lên server lấy data về
    console.log("UNSAFE_componentWillUpdate");
  }
  componentWillReceiveProps;
  //babel chuyển đổi . baebl + webpack
  render() {
    console.log("render run");
    return (
      <div>
        <h1> Play ground - life cycle- react hooks </h1>

        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                counter: prevState.counter + 1,
              };
            });
          }}
        >
          Counter ADD
        </button>
      </div>
    );
  }
}
