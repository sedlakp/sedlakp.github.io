# OrangePI - Headless Ubuntu server setup

_2023/8/25_

I've had an Orange PI LTS 3 in my drawer, onto which I installed Debian desktop some time ago. I decided to install Ubuntu server instead. 

This article describes how I did it without using a keyboard (or a mouse) connected to the Orange PI directly. 

## Things I needed

- Orange PI LTS 3
- Downloaded Ubuntu server image (.img extension)
- Laptop (My laptop's OS is macOS)
- Router
- Ethernet cable
- SD card
- MicroSD card
- Adapter - MicroSD card to USB
- Adapter - USB to USB-C

## Steps

1. First of all, I formated the SD card using `Disk Utility` app, that should be installed on the macOS by default. 
    1. Select the SD card from the left menu
    2. Click on Erase located in the top bar on the right
    3. Format as MS-DOS (FAT)
2. Open Terminal and check the disk location with `diskutil list`
    - the one were looking for is /dev/diskX (where X is some number) and is labeled as external
3. Unmount the disk (the SD card) with `diskutil unmountDisk /dev/diskX` (dont forget to change to the correct path you found in previous step)
4. Copy and burn the image on to the sd card -> `sudo dd if=./path/image-name.img of=/dev/diskX bs=4M` (change the path to the path of the image file)
    - this will take some time (a couple minutes)
    - when it finishes, you'll see something similar to this: 
    ```
    417+0 records in
    417+0 records out
    1749024768 bytes transferred in 115.480932 secs (15145572 bytes/sec)
    ```
5. Insert the sd card into the slot on the Orange PI
6. Power on the orange pi
7. Now go back to Terminal and look at devices on local network -> `arp -a`
8. Connect Orange PI to the router with the ethernet cable
9. Look at devices on local network again and find the IP of the device that wasn't in the list before -> `arp -a`
10. Connect to the orange pi -> ssh -l orangepi some.ip.address
11. When prompted for a password, input `orangepi` as the password
12. I also want to install Ubuntu on the eMMC Flash Memory so I don't lose any progress or saved data when I turn off the power. This also allows me to use the sd card slot as a storage.
    - TODO
13. Now I still have 2 cables coming from the Orange PI, one that allows Orange PI to eat electricity and one for internet. I want to get rid of the internet cable so let's connect to wifi
    - TODO


## Resources

http://www.microdev.it/wp/en/2016/06/17/sd-card-setup-for-orange-pi-pc-openelec-in-osx/

https://jumptuck.com/blog/2023-02-13-install-linux-orange-pi-3-lts-emmc/

http://www.goattack.com/2016/01/04/the-hackers-way-to-set-up-a-orangepi-without-keyboard-or-monitor-aka-easy-headless-install/