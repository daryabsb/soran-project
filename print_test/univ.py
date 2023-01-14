# import paramiko

# ssh = paramiko.SSHClient()

# ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# ssh.connect(hostname='172.16.10.54', username='admin', password='WAN@20202020')

# stdin, stdout, stderr = ssh.exec_command('COMMAND')


# import paramiko
from netmiko import ConnectHandler

# ssh = paramiko.SSHClient()
# ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
# ssh.connect(hostname='192.168.0.1', username='admin', password='WAN@20202020')
# stdin, stdout, stderr = ssh.exec_command('ls')
# print(stdout.read())
# ssh.close()
device = ConnectHandler(device_type='uniview', ip='172.16.10.54', username='admin', password='WAN@20202020')
output = device.send_command("show version")
print (output)
device.disconnect()
