import sys

try:
    exec(sys.stdin.read())
except Exception as e:
    print(f"Error: {str(e)}")
