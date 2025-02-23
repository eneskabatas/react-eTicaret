import ReactDOM from "react-dom"
import "./topBtn.css"

const TopBtnPortal = (props) => {

    const portalElement = document.getElementById("btn")

    const TopBtn = (props) =>{
        return <div className="topBtnContainer"> {props.children} </div>
    }
    

    return (
        <>
        {
            ReactDOM.createPortal( <TopBtn> {props.children} </TopBtn>, portalElement )
        }
        </>
    )
}

export default TopBtnPortal