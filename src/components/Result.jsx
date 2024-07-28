import "./Result.css";
import { FaSquareFull } from "react-icons/fa";
const Result = ({ number }) => {
  let digits = number.split("");
  return (
    <>
      <div className="main">
        <div className="odometer">
          {digits.map((item, index) => {
            return <span key={index}>{item}</span>;
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

          <span className="unit">km</span>
        </div>
      </div>
    </>
  );
};

export default Result;
