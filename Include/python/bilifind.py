import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["bilidb"]
mycol = mydb["index"]

for x in mycol.find():
    print(x)