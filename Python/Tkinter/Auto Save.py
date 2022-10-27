import threading
import time
import tkinter

root = tkinter.Tk()

def autosave():
    while True:
        # do something you want
        time.sleep(60 * 5)

saver = threading.Thread(target=autosave)
saver.start()
root.mainloop()