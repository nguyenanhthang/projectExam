import './Exam.css'
function Exam({title,minute,second,questions,answers}) {
    return ( 
        <div className="containerExam">
            <div className="asideLeft">
                <div className="navExam">
                    <div className="headerExam">
                        <h4 className="titleExam">{title||"Kiểm tra an toàn bảo mật thông tin lần 2"}</h4>
                    </div>
                    <div className="timeExam">
                        <span className="countTime">Còn lại: {minute||0}phút {second||0}giây</span>
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
                    <button className='btnQuestion'>1</button>
                </div>
            </div>
        </div>
    );
}

export default Exam;