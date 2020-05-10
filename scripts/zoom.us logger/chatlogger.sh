#!/usr/bin/env python3

import argparse, json, textwrap

# python chatlogger.py chat.json
# python chatlogger.py chat.json --output chat.txt

parser = argparse.ArgumentParser(formatter_class=argparse.RawDescriptionHelpFormatter,
  description=textwrap.dedent('''\
    Usage Examples:
    
    Display chat from file:
      python chatlogger.py chat.json
      
    Display and output chat to file:
      python chatlogger.py chat.json --output chat.txt
    ''')
)
parser.add_argument("chat", type=str, help='chat json file')
parser.add_argument('--output', metavar='OUTPUT', type=str, help='output file to save chat text to')
args = parser.parse_args()

chat_log = list()

with open(args.chat, "r") as f:
	data = json.load(f)
	for message in data:
		chat_log.append("[" + message['time'] + "] " + message['username'] + ": " + message['content'])

for msg in chat_log:
    print(msg)
    
if args.output:
    with open(args.output, "w+") as f:
        f.writelines("%s\n" % msg for msg in chat_log)
        
