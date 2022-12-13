import "./DashBoard.css";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faFilter,
    faBars,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Result from "../../components/resultDashboard/Result";
import { useState} from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function DashBoard() {
    const navigate = useNavigate();
    const dataLogin= useLocation()
    const getDate = localStorage.getItem('DataUser')
    console.log(getDate);
    const userParse = JSON.parse(getDate)
    console.log(userParse);
    const [isMobile, setIsMobile] = useState("");
    const handleShow = () => {
        setIsMobile(() => (isMobile ? "" : "isMobile"));
    };
    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(
        userParse.chapper && userParse.chapper.length / usersPerPage
    );
    console.log(userParse.chapper);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const handleOut =()=>{
        localStorage.removeItem('user')
        navigate(-1)
    }
    return (
        <div className="container">
            <div className={`navUser ${isMobile}`}>
                <div className={`modal ${isMobile}`}>
                    <div onClick={handleShow} className="modal__overlay"></div>
                </div>
                <div className="avatarUser">
                    <img className="imgUser" src="../../../avata2 1.png" alt="" />
                </div>
                <div className="infoUser">
                    <div className="info">
                        <p className="infoUserName">User: {userParse.name||''}</p>
                        <span className="infoUserPoint">point: {userParse.point||''}</span>
                    </div>
                    <div className="actionBtnUser">
                        <button onClick={handleOut} className="btn">Logout</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="headerMobile">
                    <button className="btnMobile" onClick={handleShow}>
                        <FontAwesomeIcon className="icon" icon={faBars} />
                    </button>
                    <h2 style={{ textAlign: "center", color: "#ffff" }}>DashBoard</h2>
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
                    {userParse.chapper &&
                        userParse.chapper
                            .map((el, i) => {
                                return (
                                    <Result
                                        key={i}
                                        data={el}
                                        minutes={el.minutes}
                                        title={el.title}
                                        point={el.point}
                                        ratting={<FontAwesomeIcon icon={faStar} />}
                                    />
                                );
                            })
                            .slice(pagesVisited, pagesVisited + usersPerPage)}
                </div>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={changePage}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}

export default DashBoard;
