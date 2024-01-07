import axios from "axios"
import { createRequestHeader } from "./createHeader"

export default async function getBotWebInfo(botId: number) {
    let headers = createRequestHeader()
    let res = await axios.get("https://xinghuo.xfyun.cn/iflygpt/bot/getBotwebInfo", {
        params: {
            botId,
        },
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
    //         "bot_template": "输入各种信息",
    //         "botweb_status": 1,
    //         "bot_name": "艾博特",
    //         "channel": null,
    //         "avatar": "https://bjcdn.openstorage.cn/xinghuo-privatedata/personality/2024-01-05/3f7c0936-ad1d-4bcd-85e0-0a48bcae97b6/cropped-image.jpeg?width=128&height=128",
    //         "bot_desc": "艾博特私人助手",
    //         "specialBotCode": [],
    //         "inputExample": [
    //             "今天天气怎么样",
    //             "晚餐有什么好推荐的",
    //             "哪里有好玩的地方"
    //         ],
    //         "support_system": 1,
    //         "chat_id": 0,
    //         "promptType": 1,
    //         "uid": 12123852747,
    //         "botwebStatus": 1,
    //         "supportContext": true,
    //         "bot_type": 15,
    //         "template_id": -1,
    //         "location": "东莞市",
    //         "support_document": 0,
    //         "creator_avatar": "https://aixfyun-cn-bj.xfyun.cn/aixfyun/1681904664000/avatar.png",
    //         "creator_nickname": "阿添A***",
    //         "dataset": [],
    //         "isFavorite": 0
    //     }
    // }
    return res.data
}