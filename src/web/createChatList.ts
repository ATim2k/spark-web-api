import axios from "axios"
import { createRequestHeader } from "./createHeader"
import config from "../config"

export default async function createChatList() {
    let headers = createRequestHeader()
    let res = await axios.post(`https://xinghuo.xfyun.cn/iflygpt/u/chat-list/v1/create-chat-list`, {
        botId: config.botId
    }, {
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
    //         "id": 158313206,
    //         "title": "新对话窗口",
    //         "enable": null,
    //         "createTime": "2024-01-07 11:57:14",
    //         "fileId": null,
    //         "botId": 2061480,
    //         "personalityId": null,
    //         "oldBlankList": false
    //     }
    // }
    return res.data
}