# spark-web-api

项目Github地址  [项目地址](https://github.com/ATim2k/spark-web-api "项目地址")

## 项目由来

我在B站闲逛的时候看到个视频
[【Python免费无限制调用国产GPT，星火大模型做我的AI助手，做群内AI显眼包-哔哩哔哩】 ](https://b23.tv/i7SNKnN "【Python免费无限制调用国产GPT，星火大模型做我的AI助手，做群内AI显眼包-哔哩哔哩】 ")
里面有个项目 [sparkdesk-api](https://github.com/HildaM/sparkdesk-api "sparkdesk-api")
仔细看了一下正好适合我最近想做的一款AI助手(专项管理我的其他小项目)
于是乎 **spark-web-api** 就诞生了

整个项目的设计都参考了 sparkdesk-api 的原型
个人Node版本为18.15.0 NPM版本9.6.2
目录结构如下

[![](https://blog.atim2k.top/content/uploadfile/202401/64d21704605549.png)](https://blog.atim2k.top/content/uploadfile/202401/64d21704605549.png)

## 项目目标
**已实现** ~~未实现~~
1. 使用个性化自定义助手
2. 聊天记录自动抓取sid连续对话
3. ~~多对象多对话~~
4. ~~加入普通对话模式~~
5. ~~清空/重置对话~~

## 使用步骤

1. 先找到config.ts，打开查看，里面必填3个参数 cookie, botId, GtToken。下面是获取步骤

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-77e61704605693.png)](https://blog.atim2k.top/content/uploadfile/202401/77e61704605693.png)

2. 先[创建助手](https://xinghuo.xfyun.cn/botcenter/createbot "创建助手")，剩下的创建自己操作就行

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-97b71704605811.png)](https://blog.atim2k.top/content/uploadfile/202401/97b71704605811.png)

3. 点开你创建好的助手，选择侧边栏中的web应用

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-102b1704605867.png)](https://blog.atim2k.top/content/uploadfile/202401/102b1704605867.png)

4. 点开web应用后会有一个链接地址，以我的示例，[ https://xinghuoxfyun.cn/botweb/2061480]( https://xinghuoxfyun.cn/botweb/2061480 " https://xinghuoxfyun.cn/botweb/2061480")，地址botweb/后面就是botId，先填写到config.ts里面去

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-198b1704605896.png)](https://blog.atim2k.top/content/uploadfile/202401/198b1704605896.png)

5. 新开一个浏览器窗口，打开F12切换至手机模式，填入你的助手网址

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-a0c71704605994.png)](https://blog.atim2k.top/content/uploadfile/202401/a0c71704605994.png)

6. 打开后先随便说一句话

[![](https://blog.atim2k.top/content/uploadfile/202401/63c11704606026.png)](https://blog.atim2k.top/content/uploadfile/202401/63c11704606026.png)

7. 在F12的开发者工具中找到 [网络] 或 [Network] 选项卡，查看chat接口，cookie就在这里

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-73601704606078.png)](https://blog.atim2k.top/content/uploadfile/202401/73601704606078.png)

8. 随后再点开载荷选项，就能看到GtToken了，至此，三个参数全部集齐

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-cb181704606140.png)](https://blog.atim2k.top/content/uploadfile/202401/cb181704606140.png)

9. 启动项目之后，app.ts里面默认端口为6666，请求地址为xxxx:6666/getBotWebAnswer?text=今天天气怎么样

[![](https://blog.atim2k.top/content/uploadfile/202401/thum-6fd41704606270.png)](https://blog.atim2k.top/content/uploadfile/202401/6fd41704606270.png)

## 项目鸣谢

spark-web-api  [项目地址](https://github.com/ATim2k/spark-web-api "项目地址") 的各位贡献者
<a href="https://github.com/HildaM/sparkdesk-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HildaM/sparkdesk-api" />
</a>