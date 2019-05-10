/* 包含多个工具函数 */
import {format} from 'date-fns';

export default {

    // 传入日期对象time，将日期格式化为  YYYY-MM-DD HH:mm:ss
    formateDate(time){
        if (!time) {
            return ""
        }
        return format(time,"YYYY-MM-DD HH:mm:ss")
    }
    
}