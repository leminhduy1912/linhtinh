import "./Result.css";

const Result = (props) => {
  console.log(props);
  const { number } = props;
  const digits = number.toString().split("");
  return (
    <>
      <div className="main">
        <div className="odometer">
          {/* {digits.map((digit, index) => (
            <span key={index}>{digit}</span>
          ))} */}
          {"096578"}
          <span className="unit">km</span>
        </div>
      </div>
    </>
  );
};

export default Result;
