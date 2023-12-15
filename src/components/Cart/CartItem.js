

const CartItem = (props) => {
console.log(props)
  return (
    <li>
      <div>
          <img src={props.imageUrl} alt={props.name} />
          <h2>{props.name}</h2>
          <span >{props.price}</span>
          <span >x {props.quantity}</span>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;