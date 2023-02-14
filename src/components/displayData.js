const Data = (props) => {
const form1Data = props.props1;
const form2Data = props.props2;
console.log(form1Data,form2Data);
    return (<div>
        <div className="successDiv"><h1>Data added successfully</h1></div>
        {Object.keys(form2Data).map((key, index) => {
        return (
          <div key={index} className="dataDiv1">
            <div  className="dataDiv"> <h2>{key}: </h2> </div>
            <div className="dataDiv"><h2>{form2Data[key]}</h2> </div>

          </div>
        );
      })}
{Object.keys(form1Data).map((key, index) => {
        return (
          <div key={index} className="dataDiv1">
            <div  className="dataDiv"> <h2>{key}: </h2> </div>
            <div className="dataDiv"><h2>{form1Data[key]}</h2> </div>

          </div>
        );
      })}


    </div>  );
}
 
export default Data;