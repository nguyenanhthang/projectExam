import { useState } from 'react';
import './Exam.css'
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Exam({title,minute,second,questions,answers}) {
    const [isMobileE,setIsMobileE] = useState('')
    const handleShow =()=>{
        console.log('aaa')
        setIsMobileE(()=>isMobileE ? '':'isMobileE')
    }
    return ( 
        <div className="containerExam">
            <div className="asideLeftE">
                <div className="navExam">
                    <div className='headerMobileE'>
                        <FontAwesomeIcon onClick={handleShow} className='iconE' icon={faBars} />
                        <h2 style={{textAlign:'center',color:'#ffff'}}>Làm bài thi</h2>
                        <div></div>
                    </div>
                    <div className="headerExam">
                        <h4 className="titleExam">{title||"Kiểm tra an toàn bảo mật thông tin lần 2"}</h4>
                    </div>
                    <div className="timeExam">
                        <span className="countTime">Còn lại: {minute||0}phút {second||0}giây</span>
                    </div>
                    <div className='progress-bar'>
                        <div class="progress-bar__progress" style={{width: '40%'}}>
                            40%
                        </div>
                    </div>
                </div>
                <div className='bodyExam'>
                    <div className='mainExam'>
                        <div className='question'>
                            <h3 className='textQuestion'>{questions||'Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?'}</h3>
                        </div>
                        <div className='answers'>
                            <div className='answerInput'>
                                <input type="checkbox" name='A'/>
                                <label htmlFor="A">{questions||'A. 12 ngày nếu làm đủ cả năm'}</label>
                            </div>
                            <div className='answerInput'>
                                <input type="checkbox" name='B'/>
                                <label htmlFor="B">{questions||'B. 16 ngày nếu làm đủ cả năm'}</label>
                            </div>
                            <div className='answerInput'>
                                <input type="checkbox" name='C'/>
                                <label htmlFor="C">{questions||'C. Không có nghỉ phép vẫn hưởng lương'}</label>
                            </div>
                            <div className='answerInput'>
                                <input type="checkbox" name='D'/>
                                <label htmlFor="D">{questions||'D. 8 ngày nếu làm đủ cả năm'}</label>
                            </div>
                        </div>
                    </div>
                    <div className='btnExam'>
                        <button className='btn Next'>Câu Trước</button>
                        <button className='btn prev'>Câu Sau</button>
                    </div>
                </div>
            </div>
            <div className='asideRight'>
                <div className='chooseQuestion'>
                    <button className='btnQuestion active'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                    <button className='btnQuestion'>1</button>
                </div>
                <div className='btnFinishExam'><button className='btnFinish'><b>Nộp Bài</b></button></div>
            </div>
            <div  className={`modalE ${isMobileE}`}>
                <div onClick={handleShow} className={`modal__overlayE ${isMobileE}`}>
                    <div className='modal__bodyE'>
                        <div className='asideRightM'>
                            <div className='chooseQuestion'>
                                <button className='btnQuestion active'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
                                <button className='btnQuestion'>1</button>
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