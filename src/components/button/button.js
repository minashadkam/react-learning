import './button.scss';
import PropTypes from "prop-types";
import {ButtonType} from "../../models/button-type";

const Button = (props) => {
    const {iconClasses, loading, icon, label} = props;
    const iconClassName = "material-icons button-icon".concat(iconClasses || '');

    const classes = () => {
        return '';
    }

    return (
        <button
            type="button"
            onClick="onClick.emit($event)"
            className={classes}
            disabled={disabled}>
            {
                icon && <span className={iconClassName}>{loading ? 'sync' : icon}</span>
            }
            {
                label && <span className="button-label"> {label}</span>
            }
            {
                props.children
            }
        </button>);
}

Button.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    styleClasses: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(ButtonType)),
    size: PropTypes.oneOf(['sm', 'lg']),
    iconPosition: PropTypes.oneOf('left', 'right'),
}
export default Button;