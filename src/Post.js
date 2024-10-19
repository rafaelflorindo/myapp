import './Post.css';

function Post(props) {
    return (
      <div className="Post">
         <header><h1>{props.titulo}</h1></header>
         
         <p>{props.texto}</p>
      </div>
   );
}  export default Post;
