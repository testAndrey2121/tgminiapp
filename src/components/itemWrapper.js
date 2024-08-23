import Item from "./item";

function ItemWrapper( {data} ) {
    return (

      <div className="item-wrapper">
        {data.map( item => (
          <div key={item}>
            <Item item={item}/>
          </div>
        ))}
      </div>
    );
  }
  
  export default ItemWrapper;
  