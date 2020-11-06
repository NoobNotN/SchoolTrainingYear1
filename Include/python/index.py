from flask import Flask
import json
import requests
import re
import sys
import wordcloud
import pymongo
import csv
import pandas as pd
import requests
import io
import wordcloud
import threading

print('begin')
app = Flask(__name__)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')  # 编码
@app.route('/Bgengxin', methods=['GET', 'POST'])
def index():
    print('B站开始更新')
    # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-爬取信息-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    key = ('id', 'name', 'up', 'play', 'view', 'hot')
    nowdata = []
    nowdataa = []
    url = 'https://www.bilibili.com/ranking'  # 排行榜
    response = requests.get(url)
    html = response.text
    video_list = re.findall(r'<a href="(.*?)" target="_blank">', html)  # 排行榜链接列表
    label_list = []
    video_name = re.findall(r'target="_blank" class="title">(.*?)</a><!----><div class="detail"><span class="data-box">',
                            html)  # 排行榜视频名
    video_play = re.findall(r'<i class="b-icon play"></i>(.*?)</span>', html)  # 播放数
    video_view = re.findall(r'<i class="b-icon view"></i>(.*?)</span><a target="_blank"', html)  # 评论数
    video_up = re.findall(r'<i class="b-icon author"></i>(.*?)</span></a>', html)  # UP主
    video_hot = []

    # print(video_name)
    # print(video_play)
    # print(video_view)
    # for i in range(0, 100):
    # @@@@@@@@@@@@@@@@-计算热度-@@@@@@@@@@@@@@@@@@@
    for i in range(0, 100):
        num_play = filter(str.isdigit, video_view[i])
        time_list = list(num_play)
        time_str = "".join(time_list)  # 转为str
        num_play = int(time_str)  # 转为int
        num_view = filter(str.isdigit, video_play[i])
        time_list = list(num_view)
        time_str = "".join(time_list)  # 转为str
        num_view = int(time_str)  # 转为int
        wht = re.sub("[A-Za-z0-9!%\[\],。]", "", video_view[i])
        if wht == '.万':
            hotnum = num_play * 1000 + num_view * 10000 * 30
        else:
            hotnum = num_play * 1000 + num_view * 30
        video_hot.append(hotnum)
        # print(video_hot[i])
    # @@@@@@@@@@@@@@@@-循环输出视频名、 UP主、 播放数、 评论数、 热度-@@@@@@@@@@@@@@@@@@@@@
    # for i in range(0, 100):
    #     print('%d.' % (i + 1), end='')
    #     print('%-65s' % video_name[i], end='')
    #     print('up主: %-15s' % video_up[i], end='')
    #     print('播放数: %-8s' % video_play[i], end='')
    #     print('评论数: %s' % video_view[i])
    #     print('热度： %s' % video_hot[i])

    # @@@@@@@@@@@@@@@@@@@@@@@@@@@-存数据库数据-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    for i in range(0, 100):
        nowvedio = {}

        nowvedio[key[0]] = i + 1
        nowvedio[key[1]] = video_name[i]
        nowvedio[key[2]] = video_up[i]
        nowvedio[key[3]] = video_play[i]
        nowvedio[key[4]] = video_view[i]
        nowvedio[key[5]] = video_hot[i]
        nowdata.append(nowvedio)
    # print(nowdata)
    # @@@@@@@@@@@@@@@@@@@@@@@@@@@-存数csv数据-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    with open("Bilitext.csv","w") as csvfile:
        writer = csv.writer(csvfile)
        # writer.writerow(["name", "tpye", "value", "date"])
        for n in range(0, 100):
            for m in range(0, 6):
                i = 99 - n
                nowvedioo = []
                nowvedioo.append(i)
                nowvedioo.append(video_name[i])
                nowvedioo.append(video_hot[i])
                nowvedioo.append('day')
                if 100-i+m <= 100:
                    nowvedioo[3]='2019/1/' + str(100-i+m)
                    nowdataa.append(nowvedioo)
                    # print(nowvedioo)
    # print(nowdataa)
    column = ["name", "type", "value", "date"]
    test = pd.DataFrame(columns=column, data=nowdataa)
    test.to_csv(('Bilitext.csv'),index=False,encoding='utf_8_sig')
    # @@@@@@@@@@@@@@@@@@@@@@@-存入数据库-@@@@@@@@@@@@@@@@@@@@@@@@@@@
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    bilidb = myclient["bilidb"]
    bilidata = bilidb["index"]
    x = bilidata.insert_many(nowdata)
    # #@@@@@@@@@@@@@@@@@@@@@@@@ -生成图片- @@@@@@@@@@@@@@@@@@@@@@@
    for video in video_list:
        video_response = requests.get(video)
        video_html = video_response.text
        video_label = re.findall(r'target="_blank">(.*?)</a>', video_html)
        for label in video_label:
            label_list.append(label)  # 把排行榜视频的所有标签添加进label_list
    label_string = " ".join(label_list)  # 把label_list转string型
    w = wordcloud.WordCloud(width=1000,
                            height=700,
                            background_color='black',
                            font_path='msyh.ttc')
    w.generate(label_string)
    w.to_file('BiliBili.png')
    print('B站更新成功')
    return 'success'

@app.route('/Zgengxin', methods=['GET', 'POST'])
def index2():
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
        'Referer': 'https://www.zhihu.com/',
        'Cookie': '_zap=d39ea999-dcf8-444d-bbb0-2cda0cafc120; _xsrf=h9rWw9E1GllsC5SWVFhNuzIwLh1rMJwC; d_c0="AFBXCSgdwRCPTq5Y9be2-hfV9PYFoGjShYU=|1580617560"; _ga=GA1.2.199974176.1582682758; __utmv=51854390.100--|2=registration_date=20181024=1^3=entry_date=20181024=1; __utma=51854390.199974176.1582682758.1583305021.1585272208.2; __utmz=51854390.1585272208.2.2.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/question/341975664; q_c1=9c9ff1c675e64038b8d4f73a8df65af8|1586325841000|1583305018000; tshl=; _gid=GA1.2.287555753.1587213310; tst=h; l_cap_id="YTIwYzhiMjI3NTQ0NGE0MDliMTFmYzNiZTZjNmJiNjc=|1587730036|32ef96126d9fb594b61796060856cffed84fb8eb"; r_cap_id="MjFhN2JlOGRjNmE4NGU1OTk1M2M1YmY2MWJjMTliMDA=|1587730036|b4cb68731ebb9cf87f0e05710097d99a186865c8"; cap_id="MTlmOGZmNTdiYWNiNDNjMDgyYWZhOWEzMjQ1MWEzNTg=|1587730036|2b27bc6b2c54f935d1a40cac4bc40ea1a79f4888"; capsion_ticket="2|1:0|10:1587730745|14:capsion_ticket|44:MmIzNzczZDljNjJlNGU1Y2E1YzZmYzlkNGFhYmRjYzI=|ec1563485d9859e93670e450806fc90bda9e3c37ecf1f5e0924bcc207c05cf09"; z_c0="2|1:0|10:1587730749|4:z_c0|92:Mi4xMHE2ZUdRQUFBQUFBVUZjSktCM0JFQ1lBQUFCZ0FsVk5QQ2VRWHdCMEw4SkIweFhYdjM2MkNRYlJST05vQmp1YV9R|88f851b854eea8ad6729fb2429a78fc05904beb9e2c2db789a5876569d1ec64e"; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1587727997,1587730067,1587730328,1587776517; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1587776517; _gat_gtag_UA_149949619_1=1; KLBRSID=d6f775bb0765885473b0cba3a5fa9c12|1587776512|1587776509; SESSIONID=p7nbxGhl3KjKzVkhyjXr4iclHgP18JaYYcrceiKgOxy; JOID=VVsUBknAQ0LGbpmGd8KCGHEOUaxgtHYooxPa7B_2DCqJE8rpHcbJ4ppvn4B0mt4-2fxJ44bNWRpplWC67e7yNmU=; osd=W10RAEPORUfAZJeAcsSIFncLV6ZusnMuqR3c6Rn8AiyMFcDnG8PP6JRpmoZ-lNg73_ZH5YPLUxRvkGaw4-j3MG8='
    }  # 改cookie
    response = requests.get("https://www.zhihu.com/hot", headers=headers)  # 知乎热榜链接
    html = response.text
    html_list = re.findall(r'</div></div><div class="HotItem-content"><a href="(.*?)" title="', html)  # 抓链接
    print(html_list)
    print(len(html_list))
    label_list = []
    for i in range(0, 50):
        #                hot_html原网页   //
        hot_response = requests.get(html_list[i], headers=headers)  # 反爬
        hot_html = hot_response.text
        hot_label = re.findall(r'keywords" content="(.*?)"/><meta itemProp="answerCount"', hot_html)  # 抓热词
        hot_name = re.findall(r'><title data-react-helmet="true">(.*?)？ - 知乎</title><meta name="viewport"',
                              hot_html)  # 抓标题
        print('%d.' % (i + 1), end='')
        if hot_name:
            print(hot_name[0])
        else:
            print('@@@@@@@@@@@@@@此条为敏感内容，已跳过@@@@@@@@@@@@@')
        for i in range(len(hot_label)):
            label_list.append(hot_label[i])
    print(label_list)
    label_string = " ".join(label_list)  # 转换string
    print(label_string)
    w = wordcloud.WordCloud(width=2000,
                            height=1400,
                            background_color='black',
                            font_path='msyh.ttc')
    w.generate(label_string)
    w.to_file('zhihu.png')  # 生成图片
    print("---------------------------------知乎更新完毕-开始更新B站-------------------------------")
    return 'success'

if __name__ == '__main__':
    app.run()