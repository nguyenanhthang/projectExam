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
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
function DashBoard() {
    const navigate = useNavigate();
    const getDate = localStorage.getItem("DataUser")
    const userParse = JSON.parse(getDate)
    const getFinish = JSON.parse(localStorage.getItem('finishExam'))
    const [isMobile, setIsMobile] = useState("");
    const [level,setLevel]=useState('')
    const [filter,setfilter]=useState(userParse.chapper)
    const [searchItem,setSearchItem]=useState('')
    const handleShow = () => {
        setIsMobile(() => (isMobile ? "" : "isMobile"));
    };
    // pagination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(
        filter && filter.length / usersPerPage
    )
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const handleOut = () => {
        localStorage.removeItem("user");
        navigate(-1);
    };
    useMemo(()=>{
        setfilter(userParse.chapper.filter((el)=> {
            return el.title.includes(searchItem)&&el.level.includes(level)
        }))
    },[level,searchItem])
    const search =()=>{
        setfilter(userParse.chapper.filter((el)=> {
            return el.title.includes(searchItem)&&el.level.includes(level)
        }))
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
                        <p className="infoUserName">User: {userParse.name || ""}</p>
                        <span className="infoUserPoint">
                            point: {getFinish?getFinish.point+userParse.point:userParse.point}
                        </span>
                    </div>
                    <div className="actionBtnUser">
                        <button onClick={handleOut} className="btn">
                            Logout
                        </button>
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
                        onChange={(e)=>setSearchItem(e.target.value)}
                            className="inputSearch"
                            spellCheck={false}
                            placeholder="Search..."
                        />
                        <button onClick={search} className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={`filterDash ${isMobile}`}>
                        <select onChange={(e)=>setLevel(e.target.value)} style={{width:'100%',height:'100%',border:'none',padding:'5px',fontSize:'1rem',outline:'none'}} id="filter">
                            <option value="">All</option>
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </div>
                </div>
                    
                <div className="leaderBoard">
                    {filter &&
                        filter
                            .map((el, i) => {
                                return (
                                    <Result
                                        key={el.id}
                                        data={el}
                                        level={el.level}
                                        minutes={el.minutes}
                                        title={el.title}
                                        point={ getFinish?getFinish.point:el.point}
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
