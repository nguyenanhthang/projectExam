import { useMemo, useState } from 'react';
import './Exam.css'
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Exam() {
    const navigate = useNavigate();
    const getDataExam= localStorage.getItem('dataExam')
    const dataExam = JSON.parse(getDataExam)
    const [isMobileE, setIsMobileE] = useState('')
    const [checked, setChecked] = useState([])
    const [chooseAnswer, setChoooseAnswer] = useState(dataExam.lession)
    const [listsAnswer, setListAnswer] = useState([])
    const [finishExam,setFinishExam]=useState({
        sumCorrects:0,
        sumWrongs:0,
        doNotAnSwers:0,
        sumQuestions:0,
        point:0,
    })
    const [active,setActive]=useState(1)
    const [timeLeft, setTimeLeft] = useState(100)
    const handleShow = () => {
        setIsMobileE(() => isMobileE ? '' : 'isMobileE')
    }
    
    const handleCheck = (id) => {
        setChecked(pre => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            }
            else {
                return [...pre, id]
            }
        })
        
    }
    console.log(checked);
    const handleChoose = (id) => {
        setActive(id)
        setChoooseAnswer(dataExam.lession.filter((el) => {
            return (
                [el.id].includes(id)
                )
        }))
        setChecked([])
    }
    console.log(listsAnswer)
    const handleChange =()=>{
        navigate(-1)
    }
    const getAnswer=useMemo(()=>{
        setListAnswer({...listsAnswer,[active]:checked})
    },[checked])
    useEffect(()=>{
        setChoooseAnswer(dataExam.lession.filter((el) => {
            return ([el.id].includes(1))
        }))
    },[])
    const handleBubmitExam=()=>{

    }
    // const getProgress=()=>{
    //     const {start, end} = this.props;
    //     const now = new Date().valueOf();
    //     return (now - start) / (end - start);
    // }
    // const now = new Date().valueOf();
    // const start = Math.floor(now / 60000) * 60000; // current minute
    // const end = start + 60000; // start + 1 minute
    // console.log([now,start,end])
    return (
        <div className="containerExam">
            <div className="asideLeftE">
                <div className="navExam">
                    <div className='headerMobileE'>
                        <FontAwesomeIcon onClick={handleShow} className='iconE' icon={faBars} />
                        <h2 style={{ textAlign: 'center', color: '#ffff' }}>Làm bài thi</h2>
                        <div></div>
                    </div>
                    <div className="headerExam">
                        <h4 className="titleExam">{dataExam.title || ""}</h4>
                    </div>
                    <div className="timeExam">
                        <span className="countTime">Còn lại: {dataExam.minutes || 0}phút {dataExam.seconds || 0}giây</span>
                    </div>
                    <div className='progress-bar'>
                        <div className="progress-bar__progress" style={{ width: `${timeLeft}%` }}>
                            {`${timeLeft}%`}
                        </div>
                    </div>
                </div>
                <div className='bodyExam'>
                    {chooseAnswer && chooseAnswer.map((item) => {
                        return (
                            <div key={item.id} className='mainExam'>
                                <div className='question'>
                                    <h3 className='textQuestion'>{item.question}</h3>
                                </div>
                                <div className='answers'>
                                    {item.answers && item.answers.map((el, i) => {
                                        return (
                                            <div key={el.id} className='answerInput'>
                                                <input name={item.id} style={{ marginRight: '5px' }} onChange={() => handleCheck(el.id)} checked={checked.includes(el.id)} type="checkbox" />
                                                {el.name}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <div className='btnExam'>
                        <button className='btn Next'>Câu Trước</button>
                        <button onClick={handleChange} className='btn'>Chuyển Đến</button>
                        <button className='btn prev'>Câu Sau</button>
                    </div>
                </div>
            </div>
            <div className='asideRight'>
                <div className='chooseQuestion'>
                    {dataExam.lession && dataExam.lession.map((el, i) => {
                        return (
                            <button key={el.id} name={el.id} onClick={() => handleChoose(el.id)} className={`btnQuestion ${active===el.id? "active" : undefined}`}>{el.id}</button>
                        )
                    })}
                </div>
                <div className='btnFinishExam'>
                    <button onClick={handleBubmitExam} className='btnFinish'><b>Nộp Bài</b></button>
                </div>
            </div>
            {getAnswer}
            <div className={`modalE ${isMobileE}`}>
                <div onClick={handleShow} className={`modal__overlayE ${isMobileE}`}>
                    <div className='modal__bodyE'>
                        <div className='asideRightM'>
                            <div className='chooseQuestion'>
                                {dataExam.lession && dataExam.lession.map((el, i) => {
                                    return (
                                        <button key={el.id} onClick={() => handleChoose(el.id)} className='btnQuestion active'>{el.id}</button>
                                    )
                                })}
                            </div>
                            <div className='btnFinishExam'><button className='btnFinish'><b>Nộp Bài</b></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exam;