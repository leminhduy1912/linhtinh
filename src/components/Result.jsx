import "./Result.css";
import num0 from '../assets/so0.png';
import num1 from '../assets/so1.png';
import num2 from '../assets/so2.png';
import num3 from '../assets/so3.png';
import num4 from '../assets/so4.png';
import num5 from '../assets/so5.png';
import num6 from '../assets/so6.png';
import num7 from '../assets/so7.png';
import num8 from '../assets/so8.png';
import num9 from '../assets/so9.png';
import km from '../assets/km.png'
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
//          {digits.map((digit, index) => {
//   if (digit == 1) {
//     console.log("Dongle");
//     return (
//       <span
//       key={index}
//       style={{ backgroundColor:"black",paddingTop:"0.2rem",fontFamily: "Dongle",fontSize:"14.7px", fontWeight: 400, fontStyle: "normal" }}

//     >
//       {digit}
//     </span>
     
//     );
//   }else if (digit == 0) {
//     console.log("Noto");
//     return (
//       <span
//       key={index}
//       style={{ backgroundColor:"black",paddingTop:"0.2rem",fontFamily: "Dongle",fontSize:"14.7px", fontWeight: 400, fontStyle: "normal" }}

//     >
//       {digit}
//     </span>
//     );
//   } else if (digit == 2) {
//     console.log("Noto");
//     return (
//       <span
//         key={index}
//         style={{ backgroundColor:"black",paddingTop:"0.2rem",fontFamily: "Dongle",fontSize:"14.7px", fontWeight: 400, fontStyle: "normal" }}

//       >
//         {digit}
//       </span>
//     );

//   } 
//   else if (digit == 3) {
//     console.log("Noto");
//     return (
//       <span
//         key={index}
//         style={{paddingTop:"0.08rem", backgroundColor:"black",fontFamily: "Lato",fontSize:"7.8px", fontWeight: 900, fontStyle: "normal" }}

//       >
//         {digit}
//       </span>
//     );

//   }  else if (digit == 7) {
//     console.log("Noto");
//     return (
//       <span
//         key={index}
//         style={{  fontFamily: "Noto Sans KR",fontSize:"9px", fontWeight: 900, fontStyle: "normal" }}
//       >
//         {digit}
//       </span>
//     );
   
//   }  else if (digit == 8) {
//     console.log("Noto");
//     return (
//       <span
//         key={index}
//         style={{  fontFamily: "Roboto Mono",fontSize:"8.2px", fontWeight: 500, fontStyle: "normal" }}
//       >
//         {digit}
//       </span>
//     )}else {
//     return (
//       <span key={index}>
//         {digit}
//       </span>
//     );
//   }
// })}

// </div>
//     </div>
// </>)
// }

// export default Result
