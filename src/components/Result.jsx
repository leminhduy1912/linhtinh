import "./Result.css";

const Result = (props) => {
  console.log(props);
  const { number } = props;

  return (
    <>
      <div className="main">
        <div className="odometer">
          {/* {digits.map((digit, index) => (
            <span key={index}>{digit}</span>
          ))} */}
          {number}
          <span className="unit">km</span>
        </div>
      </div>
    </>
  );
};

export default Result;
