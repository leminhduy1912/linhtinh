import "./Result.css";
import num0 from '../assets/so0test.png';
import num1 from '../assets/so1test.png';
import num2 from '../assets/so2test.png';
import num3 from '../assets/so3test.png';
import num4 from '../assets/so4.jpg';
import num5 from '../assets/so5.jpg';
import num6 from '../assets/so6.jpg';
import num7 from '../assets/so7test1.png';
import num8 from '../assets/so8.jpg';
import num9 from '../assets/so9.jpg';
import km from '../assets/km.jpg'
import { FaSquareFull } from "react-icons/fa";

const Result = ({ number }) => {
  let digits = number.split("");
  return (
    <>
      <div className="main">
        <div className="odometer">
          {digits.map((digit, index) => {
            if (digit == 0) {
              return (
<img src={num0} alt="" />
              )
             
            }
            if (digit == 1) {
              return (
                  <img src={num1} alt="" />
              )
             
            }
            if (digit == 2) {
              return (
                <img src={num2} alt="" />
                              )
            }
            if (digit == 3) {
              return (
                <img src={num3} alt="" />
                              )
            }
            if (digit == 4) {
              return (
                <img src={num4} alt="" />
                              )
            }
          
            if (digit == 5) {
              return (
                <img src={num5} alt="" />
                              )
            }
            if (digit == 6) {
              return (
                <img src={num6} alt="" />
                              )
            }
            if (digit == 7) {
              return (
                <img src={num7} alt="" />
                              )
            }
            if (digit == 8) {
              return (
                <img src={num8} alt="" />
                              )
            }
            if (digit == 9) {
              return (
                <img src={num9} alt="" />
                              )
            }
            
            
          })}
          
          {/* <img src={km} alt="" className=" mt-2 "/> */}
     
         
        </div>
      </div>
    </>
  );
};

export default Result;
// import React from 'react'

// const Result = ({ number }) => {
//   let digits = number.split("");
//    return (
//      <>
//        <div className="main">
//          <div className="odometer">
//            {digits.map((digit, index) => {
//             return (
//               <span>{digit}</span>
//             )
//             if (digit == 1) {
//               console.log("1");
              
//               <span style={{ fontFamily: "Dongle", fontWeight: 900, fontStyle: "normal" }}>
//               {digit}
//             </span>
//           }
//               if (digit == 7) {
//                 console.log("7");
                
//                 <span style={{ fontFamily: "Noto Sans KR", fontWeight: 900, fontStyle: "normal" }}>
//                 {digit}
//               </span>
//             }
//            })}
// </div>
//     </div>
// </>)
// }

// export default Result
