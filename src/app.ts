//—————————————————————————————————————————————————————————————//
//                          _ooOoo_                            //
//                         o8888888o                           //
//                         88" . "88                           //
//                         (| ^_^ |)                           //
//                         O\  =  /O                           //
//                      ____/`---'\____                        //
//                    .'  \\|     |//  `.                      //
//                   /  \\|||  :  |||//  \                     //
//                  /  _||||| -:- |||||-  \                    //
//                  |   | \\\  -  /// |   |                    //
//                  | \_|  ''\---/''  |   |                    //
//                  \  .-\__  `-`  ___/-. /                    //
//                ___`. .'  /--.--\  `. . ___                  //
//              ."" '<  `.___\_<|>_/___.'  >'"".               //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |              //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /              //
//      ========`-.____`-.___\_____/___.-`____.-'========      //
//                           `=---='                           //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     //
//            佛祖保佑       永不宕机       永无BUG              //
//—————————————————————————————————————————————————————————————//
// server.ts
import express from "express";
import { formatTime } from "./utils/timeFormat";
import cors from 'cors'
import getBotWebInfo from "./web/getBotWebInfo";
import config from "./config";
import getChatHistory from "./web/getChatHistory";
import sendChatMsg from "./web/sendChatMsg";
const app = express();
const port = 6666;

app.get('/getBotWebAnswer', async (req, res) => {
    try {
        if (!req.query.text) {
            throw new Error("empty text!");
        }
        let text: string = req.query.text.toString()
        let result = await getBotWebInfo(config.botId)
        if (result.code != 0) {
            res.json(result)
            return
        }
        console.log('<<BotWebInfo>>')
        console.log(result)
        let chat_history_res = await getChatHistory(result.data.chat_id)
        let chat_history: any[] = chat_history_res.data.historyList
        let latest_msg = chat_history[chat_history.length - 1]
        let chat_answer = await sendChatMsg(result.data.chat_id, latest_msg.sid, text)
        res.json({
            code: 0,
            msg: 'success',
            data: chat_answer
        })
    } catch (error: any) {
        res.json({
            code: 1,
            msg: error.toString(),
            data: []
        })
        return
    }

})




app.use(cors());
app.listen(port, () => {
    console.log(formatTime("YYYY-MM-DD HH:mm:ss"));
    console.log(`Server listening on port ${port}`);
});