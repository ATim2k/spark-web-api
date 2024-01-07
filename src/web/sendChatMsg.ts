import axios from "axios"
import { createChatHeader } from "./createHeader"
import config from "../config"
import FormData from "form-data"

export default async function sendChatMsg(chatId: number, sid: string, text: string) {
    return new Promise(async (resolve) => {
        let headers = createChatHeader()
        let fd = Number(Date.now().toString().slice(-6))
        var formData = new FormData()
        formData.append('fd', fd)
        formData.append('chatId', chatId)
        formData.append('text', text)
        formData.append('GtToken', config.GtToken)
        formData.append('sid', sid)
        formData.append('clientType', '1')
        console.log(chatId)
        await axios.post('https://xinghuo.xfyun.cn/iflygpt-chat/u/chat_message/chat', formData, { headers: headers, responseType: 'stream' })
            .then(response => {
                let stream = response.data;
                let base64Array: any[] = [];
                let done = false
                stream.on('data', (chunk: any) => {
                    let wb: string = chunk.toString().replace(/data:/g, '').replace(/\n\n/g, '')
                    let text = Buffer.from(wb, 'base64').toString();
                    if (wb.includes('<end>')) {
                        done = true
                    }
                    if (!done) {
                        base64Array.push(text);
                    }
                });
                stream.on('end', () => {
                    let base64String = base64Array.join('');
                    base64String = base64String.split('<end>')[0]
                    console.error(base64String);
                    resolve(base64String)
                });
            })
            .catch((error: any) => {
                console.error(error);
                resolve(error.toString())
            });
    })
}