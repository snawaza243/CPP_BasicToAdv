#Import tkinter library
from tkinter import *
from tkinter import ttk
#Create an instance of tkinter frame
win = Tk()
#Set the geometry and title of tkinter Main window
win.geometry("750x250")
win.title("Main Window")
#Create a child window using Toplevel method
def ChildWindow(args):
    child_w= Toplevel(win)
    child_w.geometry("750x250")
    child_w.title("New Child Window")
    label_child= Label(child_w, text= "Hi, this is Child Window", font=('Helvetica 15'))
    label_child.pack()
    
#Create Label in Mainwindow and Childwindow
label_main= Label(win, text="Hi, this is Main window", font=('Helvetica 15'))
label_main.pack(pady=20)

win.mainloop()