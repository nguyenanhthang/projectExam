/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useRef, useState } from "react";
import "./Exam.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultExam from "./../../components/resultExams/ResultExam";
function Exam() {
    const navigate = useNavigate();
    const getDataExam = localStorage.getItem("dataExam");
    const dataExam = JSON.parse(getDataExam);
    const [isMobileE, setIsMobileE] = useState("");
    const [checked, setChecked] = useState();
    const [chooseAnswer, setChooseAnswer] = useState(dataExam.lession);
    //const [listsAnswer, setListAnswer] = useState([])
    const [listsAnswers, setListAnswers] = useState([]);
    const [active, setActive] = useState(1);
    const [show, setShow] = useState(false);
    const [timeLeft, setTimeLeft] = useState(100);
    let [sumCorrects, setSumCorrects] = useState(0);
    let [sumWrongs, setSumWrongs] = useState(0);
    let [doNotAnSwers, setDoNotAnSwers] = useState(0);
    let [sumQuestions, setSumQuestions] = useState(0);
    let [point, setPoint] = useState(0);
    const handleSubmitExam = () => {
        listsAnswers.map((aswe, i) => {
            return dataExam.lession.forEach((ques, i) => {
                if (ques.id === aswe.id) {
                    if (aswe.result !== undefined && aswe.result.length !== 0) {
                        if (aswe.result === ques.correct.id) {
                            setSumCorrects((sumCorrects = sumCorrects + 1));
                        } else if (aswe.result !== ques.correct.id) {
                            setSumWrongs((sumWrongs = sumWrongs + 1));
                        }
                    }
                }
            });
        });
        setSumQuestions((sumQuestions = dataExam.lession.length));
        setDoNotAnSwers(
            (doNotAnSwers = dataExam.lession.length - (sumCorrects + sumWrongs))
        );
        setPoint((point = sumCorrects * (250 / dataExam.lession.length)));
        localStorage.setItem(
            "finishExam",
            JSON.stringify({
                id: dataExam.id,
                sumQuestions: sumQuestions,
                doNotAnSwers: doNotAnSwers,
                point: point,
            })
        );
        setShow(!show);
    };
    const handleShow = () => {
        setIsMobileE(() => (isMobileE ? "" : "isMobileE"));
    };
    const handleChoose = (id) => {
        setActive(id)
        setChooseAnswer(
            dataExam.lession.filter((el) => {
                return [el.id].includes(id)
            })
        );
        setChecked([])
    };
    const handleChange = () => {
        navigate(-1);
    };
    const next=()=>{
        setActive(active+1)
        setChooseAnswer(
            dataExam.lession.filter((el) => {
                return [el.id].includes(active+1)
            })
        )
    }
    const pre=()=>{
        setActive(active-1)
        setChooseAnswer(
            dataExam.lession.filter((el) => {
                return [el.id].includes(active-1)
            })
        )
    }
    useMemo(() => {
        setListAnswers([...listsAnswers, { id: active, result: checked }]);
    }, [checked]);
    useEffect(() => {
        setChooseAnswer(
            dataExam.lession.filter((el) => {
                return [el.id].includes(1);
            })
        );
    }, []);
    let timerRoot = (dataExam.minutes*60)+(dataExam.seconds)
    const [ minutes, setMinutes ] = useState(dataExam.minutes);
    const [seconds, setSeconds ] =  useState(dataExam.seconds);
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
                setTimeLeft((Math.floor(100*((minutes*60)+(seconds)))/timerRoot).toFixed(1))
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
                if(minutes === 0&&seconds === 0){
                    handleSubmitExam()
                }
            }
            
        })
    return (
        <div className="containerExam">
            <div className="asideLeftE">
                <div className="navExam">
                    <div className="headerMobileE">
                        <FontAwesomeIcon
                            onClick={handleShow}
                            className="iconE"
                            icon={faBars}
                        />
                        <h2 style={{ textAlign: "center", color: "#ffff" }}>Làm bài thi</h2>
                        <div></div>
                    </div>
                    <div className="headerExam">
                        <h4 className="titleExam">{dataExam.title || ""}</h4>
                    </div>
                    <div className="timeExam">
                        <span className="countTime">
                            Còn lại: {minutes}phút {seconds < 10 ?  `${seconds}` : seconds}giây
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-bar__progress"
                            style={{ width: `${timeLeft}%` }}
                        >
                            {`${timeLeft}%`}
                        </div>
                    </div>
                </div>
                <div className="bodyExam">
                    {chooseAnswer &&
                        chooseAnswer.map((item) => {
                            return (
                                <div key={item.id} className="mainExam">
                                    <div className="question">
                                        <h3 className="textQuestion">{item.question}</h3>
                                    </div>
                                    <div className="answers">
                                        {item.answers &&
                                            item.answers.map((el, i) => {
                                                return (
                                                    <div key={el.id} className="answerInput">
                                                        <input
                                                            style={{ marginRight: "5px" }}
                                                            onChange={() => setChecked(el.id)}
                                                            checked={checked === el.id}
                                                            type="checkbox"
                                                        />
                                                        {el.name}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            );
                        })}
                    <div className="btnExam">
                        <button onClick={pre} className="btn next">Câu Trước</button>
                        <button onClick={handleChange} className="btn">
                            Chuyển Đến
                        </button>
                        <button onClick={next} className="btn prev">Câu Sau</button>
                    </div>
                </div>
            </div>
            {/* {getProgress()} */}
            <div className="asideRight">
                <div className="chooseQuestion">
                    {dataExam.lession &&
                        dataExam.lession.map((el, i) => {
                            return (
                                <button
                                    key={el.id}
                                    onClick={() => handleChoose(el.id)}
                                    className={`btnQuestion ${active === el.id ? "active" : ""}`}
                                >
                                    {el.id}
                                </button>
                            );
                        })}
                </div>
                <div className="btnFinishExam">
                    <button onClick={handleSubmitExam} className="btnFinish">
                        <b>Nộp Bài</b>
                    </button>
                </div>
            </div>
            
            {show && (
                <div className="modalR">
                    <div className="modal__overlayR"></div>
                    <div className="modal__bodyR">
                        <ResultExam
                            title={dataExam.title}
                            point={point}
                            sumQuestions={sumQuestions}
                            doNotAnSwers={doNotAnSwers}
                            sumCorrects={sumCorrects}
                            sumWrongs={sumWrongs}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            )}
            <div className={`modalE ${isMobileE}`}>
                <div onClick={handleShow} className={`modal__overlayE ${isMobileE}`}>
                    <div className="modal__bodyE">
                        <div className="asideRightM">
                            <div className="chooseQuestion">
                                {dataExam.lession &&
                                    dataExam.lession.map((el, i) => {
                                        return (
                                            <button
                                                key={el.id}
                                                onClick={() => handleChoose(el.id)}
                                                className="btnQuestion active"
                                            >
                                                {el.id}
                                            </button>
                                        );
                                    })}
                            </div>
                            <div className="btnFinishExam">
                                <button className="btnFinish">
                                    <b>Nộp Bài</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exam;
