//user-info.js
import PropTypes from "prop-types";

const UserInfo = (props) => {
    return (
        <div  className="user-info">
            <p>
                <strong>نام:</strong>
                <span>{props.name}</span>
            </p>
            <p>
                <strong>شهر:</strong>
                <span>{props.city}</span>
            </p>
            <p>
                <strong>سن:</strong>
                <span>{props.age}</span>
            </p>
            {props.children}
            <button onClick={props.exitHandler}>logout</button>
        </div>
    )
}

UserInfo.propTypes  = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    exitHandler: PropTypes.func,
    city:PropTypes.string,
    children:PropTypes.arrayOf(PropTypes.element)
}

UserInfo.defaultProps = {
    city:'ایران'
}

export default  UserInfo;