import {useRef} from 'react';
// ko đụng tới html và jsx 
// jsx => tsx
//js => ts
//Tạo CustomHook 
type ConstructorCallback= ()=> void; //hàm ConstructorCallback return về void , ko return về j cả 
//bắt buộc truyền hàm 
function useConstructor(callback: ConstructorCallback): void{
    const isRun = useRef(false);
    if(isRun.current === false){
        callback();
        isRun.current= true ;
    }
}
export default useConstructor