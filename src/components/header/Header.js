import './header.scss'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Action} from "../../models/action";
import {Avatar} from "../avatar/avatar";
import Tooltip from "../tooltip/tooltip";


export const Header = (props) => {
    let {positionFixed, hasToggleMenu, menuIsOpen, logoSrc, appTitle, actions , toggleMenuHandler} = props;

    const toggleMenu = () => {
            menuIsOpen = !menuIsOpen;
            toggleMenuHandler(menuIsOpen);
    }

    return (
        <div className="header" style={{position: positionFixed ? 'fixed' : 'unset'}}>
            {
                hasToggleMenu &&
                <i className="material-icons" onClick={toggleMenu}>{menuIsOpen ? 'clear' : 'menu'}</i>
            }
            {
                logoSrc && <Link to="/"><img className="logo" src={logoSrc} alt="logo"/></Link>
            }
            {
                appTitle && <Link to="/"><h4>{appTitle}</h4></Link>
            }

            <div className="left-bar">
                {
                    actions?.map((item , index) => {
                        const className = "material-icons".concat(item.styleClasses || '');
                        let itemElm = null;
                        if (item.type === 'icon') {
                            itemElm = <Tooltip  text={item?.tooltip}><i key={index} className={className} onClick={(event) => {
                                item?.command && item?.command(event)
                            }}>{item.icon}</i></Tooltip>
                        } else if (item.type === 'text') {
                            itemElm = <span key={index} onClick={(event) => {
                                item?.command && item?.command(event)
                            }}>{item.label}</span>
                        } else if (item.type === 'avatar') {
                            itemElm = <Avatar key={index} type={item.image ? 'img' : item.icon ? 'icon' : 'label'}
                                              value={item.image || item.icon || item.label || ''}
                                              styleClasses={item.styleClasses || ''}
                                              onClick={(event) => {
                                                  item?.command && item?.command(event)
                                              }}/>
                        }
                        return itemElm;
                    })
                }
            </div>

        </div>


    )
}

Header.propTypes = {
     positionFixed: PropTypes.bool,
     hasToggleMenu: PropTypes.bool,
     actions: PropTypes.arrayOf(Action),
     menuIsOpen: PropTypes.bool,
     appTitle: PropTypes.string,
     logoSrc: PropTypes.string,
}
Header.defaultProps = {
    positionFixed:  false,
    hasToggleMenu:  false,
    menuIsOpen:  false,
}
