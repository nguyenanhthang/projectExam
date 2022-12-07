import './DashBoard.css'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function DashBoard() {
    return ( 
        <div className="container">
            <div className="navUser">
                <div className="avatarUser">
                    <img className="imgUser" src="../../../avata2 1.png" alt="" />
                    {/* <FontAwesomeIcon className='icon' icon={faBars} /> */}
                </div>
                <div className='infoUser'>
                    <div className='info'>
                        <span className='infoUserName'>User:thang2385114@gmai l.com</span>
                        <span className='infoUserPoint'>poin:2000</span>
                    </div>
                    <div className='actionBtnUser'>
                        <button className='btn'>Logout</button>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='toolDash'>
                    <div className='searchDash'>
                    <input
                        spellCheck={false}
                        placeholder="Search..."
                    />
                    <button className='search-btn'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    </div>
                    <div className='filterDash'></div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;