import "./DashBoard.css";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faFilter,
    faBars,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Result from "../../components/resultDashboard/Result";
import { useState } from "react";
function DashBoard() {
    const [isMobile,setIsMobile] = useState('')
    const handleShow =()=>{
        setIsMobile(()=>isMobile ? '':'isMobile')
    }
    
    return (
        <div className="container">
                <div className={`navUser ${isMobile}`}>
                    <div  className={`modal ${isMobile}`}>
                        <div onClick={handleShow} class="modal__overlay"></div>
                    </div>
                    <div className="avatarUser">
                        <img className="imgUser" src="../../../avata2 1.png" alt="" />
                    </div>
                    <div className="infoUser">
                        <div className="info">
                            <p className="infoUserName">User:thang2385114@gmail.com</p>
                            <span className="infoUserPoint">poin:2000</span>
                        </div>
                        <div className="actionBtnUser">
                            <button className="btn">Logout</button>
                        </div>
                    </div>
                </div>
            <div className="main">
            <div className="headerMobile">
                <button className="btnMobile" onClick={handleShow}>
                    <FontAwesomeIcon className='icon' icon={faBars} />
                </button>
                <h2 style={{textAlign:'center',color:'#ffff'}}>DashBoard</h2>
                <div></div>
            </div>
                <div className="toolDash">
                    <div className="searchDash">
                        <input
                            className="inputSearch"
                            spellCheck={false}
                            placeholder="Search..."
                        />
                        <button className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={`filterDash ${isMobile}`}>
                        <span>
                            Difficult <FontAwesomeIcon icon={faFilter} />
                        </span>
                    </div>
                </div>
                <div className="leaderBoard">
                    <Result
                        title="Kiểm tra an toàn bảo mật thông tin 200222222222"
                        time={7}
                        point={250}
                        ratting={<FontAwesomeIcon icon={faStar} />}
                    />
                    <Result
                        title="Kiểm tra an toàn bảo mật thông tin 200222222222"
                        time={7}
                        point={250}
                        ratting={<FontAwesomeIcon icon={faStar} />}
                    />
                    <Result
                        title="Kiểm tra an toàn bảo mật thông tin 200222222222"
                        time={7}
                        point={250}
                        ratting={<FontAwesomeIcon icon={faStar} />}
                    />
                    <Result
                        title="Kiểm tra an toàn bảo mật thông tin 200222222222"
                        time={7}
                        point={250}
                        ratting={<FontAwesomeIcon icon={faStar} />}
                    />
                </div>
                
            </div>
            
        </div>
    );
}

export default DashBoard;
