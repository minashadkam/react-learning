import './header.css'

export const Header = (props) => {
    return (
        <div className="header"  onClick={props.clickHandler}>
            <div className="menuIcon">
                <div className="dashTop"></div>
                <div className="dashBottom"></div>
                <div className="circle"></div>
            </div>

            <span className="title">welcome to {props.title}</span>

            <input
                type="text"
                className="searchInput"
                placeholder="Search ..."/>
            <div className="fa fa-search searchIcon"></div>
        </div>
    )
}