import "./Result.css"
import { faClock } from '@fortawesome/free-regular-svg-icons';
//import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Result({title,time,point,ratting}) {
    return ( 
        <div className="containerResult">
            <div className="headerResult">
                <span className="title">{title}</span>
            </div>
            <div className="body">
                <div className="bodyTime">
                    <FontAwesomeIcon className="timeIcon" icon={faClock}/>
                    <span className="time">{time} phút</span>
                </div>
                <div className="bodyPoint">
                    <img className="imgPoint" src="../../../image 4.png" alt="" />
                    <span className="point">{point}/250</span>
                </div>
            </div>
            <div className="footer">
                <span className="rating">{ratting}</span>
                <span className="rating">{ratting}</span>
                <span className="rating">{ratting}</span>
                <span className="rating">{ratting}</span>
                <span className="rating">{ratting}</span>
            </div>
        </div>
    )
}

export default Result;