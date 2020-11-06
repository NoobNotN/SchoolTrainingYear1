# encoding: utf-8
# -*- coding: UTF-8 -*-
# 我想用有提埃夫八编码好吗? 秋梨膏！
import json
import requests
import re
import sys
import io
import wordcloud
import pymongo
import csv
import pandas as pd
print('B站开始更新')
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-爬取信息-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')  # 编码
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
for i in range(0, 100):
    print('%d.' % (i + 1), end='')
    print('%-65s' % video_name[i], end='')
    print('up主: %-15s' % video_up[i], end='')
    print('播放数: %-8s' % video_play[i], end='')
    print('评论数: %s' % video_view[i])
    print('热度： %s' % video_hot[i])

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
            nowvedioo.append(i+1)
            nowvedioo.append(video_name[i])
            nowvedioo.append(video_hot[i])
            nowvedioo.append('day')
            if 100-i+m <= 100:
                nowvedioo[3]='2019/1/' + str(100-i+m)
                nowdataa.append(nowvedioo)
                print(nowvedioo)
print(nowdataa)
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
