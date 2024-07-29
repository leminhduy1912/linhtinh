import "./Result.css";
import num0 from '../assets/so0.jpg';

import num1 from '../assets/so1.jpg';
import num2 from '../assets/so2.jpg';
import num3 from '../assets/so3.jpg';
import num4 from '../assets/so4.jpg';
import num5 from '../assets/so5.jpg';
import num6 from '../assets/so6.jpg';

import num9 from '../assets/so9.jpg';

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
            if (digit == 2) {
              return (
                <img src={num2} alt="" />
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
            if (digit == 8) {
              return (
                <div key={index}>
                  <span>{digit}</span>
                </div>
              );
            }
            if (digit == 9) {
              return (
                <img src={num9} alt="" />
                              )
            }
           
            // if (digit == 3) {
            //   return (
            //     <div key={index}>
            //       <span>{digit}</span>
            //     </div>
            //   );
            // }
            // return (
            //   <span
            //     key={index}
            //     style={{
            //       fontFamily: "Zain",
            //       fontSize: "16px",
            //       fontWeight: "650",
            //       fontStyle: "normal",
            //     }}
            //   >
            //     {item}
            //   </span>
            // );
          })}
          {/* {digits.map((digit, index) => {
            if (digit == 3) {
              return (
                <div key={index}>
                  <span
                    style={{
                      position: "relative",
                    }}
                  >
                    {digit}
                    <FaSquareFull
                      color="#1c2125"
                      style={{
                        width: "0.1rem",
                        height: "0.1rem",
                        position: "absolute",
                        top: "0.72rem",
                        left: "0.12rem",
                      }}
                    />
                  </span>
                </div>
              );
            } else if (digit == 4) {
              return (
                <div key={index}>
                  <span
                    style={{
                      position: "relative",
                    }}
                  >
                    {digit}
                    <FaSquareFull
                      style={{
                        backgroundColor: "red",
                        width: "0.02rem",
                        minHeight: "0.5rem",
                        maxHeight: "1rem",
                        position: "absolute",
                        top: "0.8rem",
                        left: "0.328rem",
                      }}
                    />
                  </span>
                </div>
              );
            } else {
              return <div key={index}>{digit}</div>;
            }
          })} */}

          {/* <span className="unit">km</span> */}
        </div>
      </div>
    </>
  );
};

export default Result;
