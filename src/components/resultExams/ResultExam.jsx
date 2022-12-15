import './ResultExam.css'
function ResultExam({title,sumCorrects,sumWrongs,doNotAnSwers,sumQuestions,point,handleChange}) {
    return ( 
        <div className="containerResultE">
            <div className="headerResult">
                <h4 className="titleExam">Môn: {title||""}</h4>
            </div>
            <div className="bodyResult">
                <div className="infoResult">
                    <span>Số câu trả lời đúng: {sumCorrects||0}</span>
                    <span>Số câu trả lời sai: {sumWrongs||0}</span>
                    <span>Số câu chưa trả lời đúng: {doNotAnSwers||0}</span>
                    <span>Tổng số câu hỏi: {sumQuestions||0}</span>
                </div>
                <div className="pointResult">
                    <span><b>Điểm số: {point||0}/250</b></span>
                </div>
            </div>
            <div className='actionResult'>
                <button onClick={handleChange} className='btn'>Dashboard</button>
            </div>
        </div>
    );
}

export default ResultExam;