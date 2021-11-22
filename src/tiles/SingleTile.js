const SingleTile = (props) =>
    <div  className={"tile " +  (props.classname || "")}>
        <img alt="logo"  src={props.src}></img>
        <h1>{props.title}</h1>
        <h4>Autor: {props.author}</h4>
    </div>

export default SingleTile