import subprocess

# ASCII art for watermark
ASCII_ART = r"""
  ___ _            _           _    __ ____________
 / __| |_  ___ _ _| |_ __ _  _| |_ /  \__ /__ /__ /
 \__ \ ' \/ _ \ '_|  _/ _| || |  _| () |_ \|_ \|_ \
 |___/_||_\___/_|  \__\__|\_,_|\__|\__/___/___/___/
             Github.com/Shortcut0333
"""

def get_input(prompt):
    return input(prompt)

def launch_bots():
    print(ASCII_ART)
    
    server_address = get_input("Enter the server IP address: ")
    
    port = get_input("Enter the server port: ")
    
    num_bots = int(get_input("Enter the number of bots to launch: "))
    
    print(f"Launching {num_bots} bots to {server_address}:{port}...")

    subprocess.run(['node', 'bot.js', server_address, port, str(num_bots)])

if __name__ == "__main__":
    launch_bots()