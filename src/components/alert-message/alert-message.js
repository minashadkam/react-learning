import PropTypes from "prop-types";
import {createRef} from "react";
import './alert-message.scss'

export const AlertMessage = (props) => {
    const {messages, styleClasses, hideTransition, onHide} = props;
    const refsArray = messages?.map(() => createRef());

    function onHideMessage(index, messageEl) {
        messageEl.style.transition = `opacity ${hideTransition}ms`;
        messageEl.style.opacity = '0';
        setTimeout(() => {
            if (onHide) {
                onHide(messages[index]);
            }
            messages.splice(index, 1);
        }, hideTransition);
    }

    return (
        <div className={`alert-messages ${styleClasses}`}>
            {
                messages?.map((message, index) =>
                    <div key={index} className={`alert-message  ${message.type ? 'alert-message-'+message.type :''}`} ref={refsArray[index]}>
                        <span className="material-icons alert-message-icon">{message.icon}</span>
                        {
                            message.summary && <span className="alert-message-summary">{message.summary}</span>
                        }
                        <span className="alert-message-detail">{message.detail}</span>
                        {
                            message.closeable && <button className="alert-message-close"
                                                         onClick={() => onHideMessage(index, refsArray[index].current)}>
                                <i className="material-icons" style={{fontSize: '20px'}}>close</i>
                            </button>
                        }

                    </div>
                )
            }

        </div>

    )
}

AlertMessage.propTypes = {
    styleClasses: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.node),
    hideTransition: PropTypes.number,
    onHide: PropTypes.func,
}


AlertMessage.defaultValue = {
    hideTransition: 1000
}