{"filter":false,"title":"recommend.py","tooltip":"/assets/py/recommend.py","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":50},"end":{"row":8,"column":50},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":245,"mode":"ace/mode/python"}},"hash":"dc786e65e596befb48c9b8de97da25be53754e63","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["# Python program to get a set of ","# places according to your search ","# query using Google Places API ","","# importing required modules ","import requests, json ","","# enter your api key here ","api_key = 'Your_API_key'","","# url variable store url ","url = \"https://maps.googleapis.com/maps/api/place/textsearch/json?\"","","# The text string on which to search ","query = input('Search query: ') ","","# get method of requests module ","# return response object ","r = requests.get(url + 'query=' + query +","\t\t\t\t\t\t'&key=' + api_key) ","","# json method of response object convert ","# json format data into python format data ","x = r.json() ","","# now x contains list of nested dictionaries ","# we know dictionary contain key value pair ","# store the value of result key in variable y ","y = x['results'] ","","# keep looping upto lenght of y ","for i in range(len(y)): ","\t","\t# Print value corresponding to the ","\t# 'name' key at the ith index of y ","\tprint(y[i]['name']) ",""],"id":1}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":23},"action":"remove","lines":["Your_API_key"],"id":2},{"start":{"row":8,"column":11},"end":{"row":8,"column":50},"action":"insert","lines":["AIzaSyAYnUjZz_QaP44ljPHqccjeFCNFxHAFB6k"]}]]},"timestamp":1560412155333}