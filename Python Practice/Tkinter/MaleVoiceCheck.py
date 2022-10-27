# Jia Feng Yu
# Side Project: Text to Speech App


import datetime
from turtle import speed
import uuid
from tkinter import *
from gtts import gTTS
from playsound import playsound
import os
import tkinter as tk

root = tk.Tk()
root.title('MediaPad - Translator')
root.geometry('530x330')
root.maxsize(530, 350)
root.minsize(530, 350)


import pyttsx3
Msg = StringVar()
entry_field = Entry(root, textvariable=Msg, width='50')
entry_field.place(x=20, y=100)

def test2voicemale():
    engine = pyttsx3.init()
    engine.setProperty("rate", 120)
    engine.say(entry_field.get())
    engine.runAndWait()

Button(root, text="PLAY", font="consolas 15 bold",
       command=test2voicemale, width=4).place(x=60, y=140)


root.mainloop()
