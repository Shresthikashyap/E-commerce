import { useParams } from "react-router-dom";

const Product = (props) => {

    const {id,title} = useParams();
    console.log('in show product ',id,title)

    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt={props.name} style={{ maxWidth: '100%', height: 'auto' }}/>
            <span >{props.price}</span>
        </div>
    )
}

export default Product;