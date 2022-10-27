from tkinter import *
import tkinter.messagebox
import tkinter

top = tkinter.Tk()

def helloCallBack():
   tkinter.messagebox.showinfo( "Hello Python", "Hello World")

B = tkinter.Button(top, text ="Hello", command = helloCallBack)

B.pack()
B.place(bordermode=OUTSIDE, relheight=0.100, relwidth=0.100)
top.mainloop()