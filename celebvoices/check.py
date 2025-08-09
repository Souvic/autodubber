import json
import os


with open("celebrities.json","r") as file:
    data = file.read()
    celebrities = json.loads(data)

# check if the value.mp3 exits
allsounds=[]
not_found = []
for countrycode in celebrities:
    for profession in celebrities[countrycode]:
        for celebrity in celebrities[countrycode][profession]:
            value = celebrities[countrycode][profession][celebrity]["value"]
            allsounds.append(value)
            if not os.path.exists("sounds/"+value+".mp3"):
                not_found.append(value)
                
not_found2 = []
allimages = []
for countrycode in celebrities:
    for profession in celebrities[countrycode]:
        for celebrity in celebrities[countrycode][profession]:
            value = celebrities[countrycode][profession][celebrity]["value"]
            allimages.append(value)
            if not os.path.exists("img/"+value+".webp"):
                not_found2.append(value)             
if not_found:
    print("Not found files:")
    for item in not_found:
        print(item)
else:
    print("All files found.")

not_found = set(not_found)
not_found2 = set(not_found2)
print(not_found-not_found2,not_found2-not_found)


lsounds=os.listdir("sounds")
limg=os.listdir("img")

print("Sounds not in celebrities.json:")
for sound in lsounds:
    if sound[:-4] not in not_found and sound[:-4] not in allsounds:
        print(sound)    
        
print("Images not in celebrities.json:")
for img in limg:
    if img[:-5] not in not_found and img[:-5] not in allimages:
        print(img)
                