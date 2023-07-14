import { item } from "./Main"
import "./Item.css"

function Item(props: item) {
  return (
    <div className="item">
        <div>
          <img src={props.url_image} alt={props.title} />
        </div>
        <div className="info_wrapper">
          <h3>{props.title}</h3>
          <p>{props.msg}</p>
          <a href={props.learn_more}>Learn More →</a>
        </div>
    </div>
  )
}

export default Item