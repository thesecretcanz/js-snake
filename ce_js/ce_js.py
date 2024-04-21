'''
C.E. - JS
CREATE EMBEDDED JAVASCRIPT



This python tools allow to nest html inside another html.
The software take an html code (wrote inside embedded.html) and generate a 
javascript file that can be imported inside another html file using the 
<script src="/.../embedded.js"></script> tag.

'''

file = open("embedded.html", "r")
file_content = file.read()
file.close()

def insert(array, index, element):
    new_array = array[:index]
    new_array.append(element)
    new_array = new_array + array[index:]
    return new_array

char_lst = []

for letter in file_content:
	char_lst.append(letter)

index = 0
new_line_counter = 0
while index < len(char_lst):
    if ord(char_lst[index]) == 10:
        new_line_counter += 1
    index = index + 1


index = 0
counter = 0
while index < len(char_lst):
    if ord(char_lst[index]) == 10 and counter <= new_line_counter:
        char_lst = insert(char_lst, index, chr(92))
        new_line_counter = new_line_counter + 1
        index = index + 1
    index = index + 1

js_file_content = "".join(str(element) for element in char_lst)
js_file_content = "document.write('\\" + "\n" + "\\" + "\n" + js_file_content + "\\" + "\n" + "\\" + "\n" + "');"

file = open("embedded-js.js", "w")
file.write(js_file_content)
file.close()