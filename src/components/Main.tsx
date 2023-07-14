import Item from "./Item";

export interface item {
  title: string;
  msg: string;
  url_image: string;
  learn_more: string;
} 


function Main(props: {props: item[]}) {
  return (
    <main>
      {props && props.props.map( (e, index )=> <Item key={index} {...e} />)}
    </main>
  )
}

export default Main