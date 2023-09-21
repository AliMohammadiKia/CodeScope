"""import random
import hashlib
import subprocess
import os
language = input("Enter language: ").lower()
code = input("Enter code: ")

random_str = ''.join(random.choices('0123456789abcdef', k=7))
file_path = f"temp/{random_str}.{language}"
with open(file_path, 'w') as program_file:
    program_file.write(code)


if language == "php":
    output = subprocess.run(["", filePath], capture_output=True, text=True)
    print(output.stdout)
if language == "python":
    output = subprocess.run(["", filePath], capture_output=True, text=True)
    print(output.stdout)
if language == "node":
    os.rename(filePath, filePath + ".js")
    output = subprocess.run(["node", filePath + ".js"], capture_output=True, text=True)
    print(output.stdout)
if language == "c":
    output_exe = random_str + ".exe"
    subprocess.run(["gcc", filePath, "-o", output_exe])
    output = subprocess.run([__file__ + "//" + output_exe], capture_output=True, text=True)
    print(output.stdout)
if language == "cpp":
    output_exe = random_str + ".exe"
    subprocess.run(["g++", filePath, "-o", output_exe])
    output = subprocess.run([__file__ + "//" + output_exe], capture_output=True, text=True)
    print(output.stdout)

"""
