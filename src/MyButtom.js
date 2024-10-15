import './MyButtom.css';

function MyButtom(props){
    return(
        <div className="MyButtom">
            <h1>{props.name}</h1>
        </div>
    );
}
export default MyButtom;