import PropTypes from "prop-types";
import './avatar.scss'

export const Avatar = (props) => {

    const {
        value,
        styleClasses,
        type,
    } = props;

    const classes = 'avatar'.concat(styleClasses);
    let elm = null;
    if (type === 'label') {
        elm = <span>{value}</span>
    } else if (type === 'icon') {
        elm = <span className="material-icons avatar-icon">{value}</span>
    } else if (type === 'img') {
        elm = <img src={value} className="avatar-image" alt="avatar img"/>
    }
    return (
        <div className={classes}>
            {elm}
            {props.children}
        </div>


    )
}

Avatar.propTypes = {
    value: PropTypes.string,
    styleClasses: PropTypes.string,
    type: PropTypes.oneOf(['label', 'icon', 'img']),
    shape: PropTypes.oneOf(['square', 'circle']),
    size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
}

Avatar.defaultProps = {
    type: 'label',
    shape: 'circle',
    size: 'md'
}