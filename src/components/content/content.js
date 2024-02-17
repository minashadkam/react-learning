
//content.js

import UserInfo from "../user-info/user-info";
import Counter from "../counter/counter";

export const  Content =(props)=> {
    return (
        <div className="content">
            <UserInfo name="mina" age={20} exitHandler={()=>console.log('exit')} >
               <span> وضعیت کاربر غیر فعال میباشد</span>
               <span> کاربر تستی</span>
            </UserInfo>


            <Counter/>
        </div>
    );
}

