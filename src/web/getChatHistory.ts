import axios from "axios"
import { createRequestHeader } from "./createHeader"

export default async function getChatHistory(chat_id: number) {
    let headers = createRequestHeader()
    let res = await axios.get(`https://xinghuo.xfyun.cn/iflygpt/u/chat_history/${chat_id}`, {
        headers,
    })
    // console.log(res.data)
    // 返回示例 ↓
    // {
    //     "flag": true,
    //     "code": 0,
    //     "desc": "成功",
    //     "count": null,
    //     "data": {
    //         "historyList": []
    //     }
    // }
    return res.data
}