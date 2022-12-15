import "./Result.css"
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
function Result({data,title,minutes,point,ratting,level}) {
    const navigate = useNavigate();
    const handleExam =()=>{
        localStorage.setItem('dataExam',JSON.stringify(data))
        navigate('/login/dashboard/exam')
    }
    return ( 
        <div className="containerResult">
            <div onClick={()=>handleExam()} className="headerResult">
                <p className="title">{title}</p>
            </div>
            <div style={{marginTop:'10px'}} ><b style={{background:'#3333',padding:'1%',marginTop:'1px'}}>{level}</b></div>
            <div className="body">
                <div className="bodyTime">
                    <img src="../../../toppng 1.png" alt="" className="timeIcon" icon={faClock}/>
                    <span className="time">{minutes} phút</span>
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