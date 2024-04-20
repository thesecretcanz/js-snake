file = open("file.html", "r")
fileContent = file.read()
file.close()

def insert(array, index, element):
    newArray = array[:index]
    newArray.append(element)
    newArray = newArray + array[index:]
    return newArray

charLst = []

for letter in fileContent:
	charLst.append(letter)

index = 0
counter = 0
while index < len(charLst):
    if ord(charLst[index]) == 10:
        counter += 1
    index = index + 1


index = 0
specialCharCounter = 0
while index < len(charLst):
    if ord(charLst[index]) == 10 and specialCharCounter <= counter:
        charLst = insert(charLst, index, chr(92))
        specialCharCounter = specialCharCounter + 1
        index = index + 1
    index = index + 1

jsFileContent = "".join(str(element) for element in charLst)
jsFileContent = "document.write('\\" + "\n" + jsFileContent + "');"

file = open("file.js", "w")
file.write(jsFileContent)
file.close()