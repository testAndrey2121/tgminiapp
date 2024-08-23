import Form from "../components/form";
import ItemWrapper from "../components/itemWrapper";
import ConnectWithTg from "../components/connectWithTg";

function Main( {data, pushNewData} ) {
  return (
    <div className="App">
      <Form pushNewData={pushNewData}/>
      <ItemWrapper data={data}/>
      <ConnectWithTg />
    </div>
  );
}

export default Main;
