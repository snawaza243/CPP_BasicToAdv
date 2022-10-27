from cProfile import label
from email import message
import imp
from tkinter import Label, Toplevel, Button, Tk, Menu
from tkinter import messagebox
from tkinter import *
from tkinter.messagebox import showinfo
from winsound import PlaySound
from gtts import gTTS
import speech_recognition as sr
import os
from playsound import playsound


top = Tk()
menubar = Menu(top)
file = Menu(menubar, tearoff=0)
def showabout():
    messagebox.showinfo("Title", "a Tk MessageBox")


def mediaSpeech():
    message = input.get()
    language = 'en'
    speech = gTTS(text=message, lang=language, slow=False)
    speech.save('AudioFile.mp3')
    return self.__mediaSpeech

def quitApplication():
    top.destroy()
    # exit()

def __showAbout(self):
    showinfo("Project","MediaPad")

def __openFile(self):
    
    self.__file = askopenfilename(defaultextension=".txt",
                                filetypes=[("All Files","*.*"),
                                    ("Text Documents","*.txt")])

    if self.__file == "":
        
        # no file to open
        self.__file = None
    else:
        
        # Try to open the file
        # set the window title
        self.__root.title(os.path.basename(self.__file) + " - Notepad")
        self.__thisTextArea.delete(1.0,END)

        file = open(self.__file,"r")

        self.__thisTextArea.insert(1.0,file.read())

        file.close()

    
def newFile():
    top.title("Untitled - Notepad")
    top.file = None
    self.__thisTextArea.delete(1.0,END)

def __saveFile(self):

    if top.__file == None:
        # Save as new file
        top.__file = asksaveasfilename(initialfile='Untitled.txt',
                                        defaultextension=".txt",
                                        filetypes=[("All Files","*.*"),
                                            ("Text Documents","*.txt")])

        if self.__file == "":
            self.__file = None
        else:
            
            # Try to save the file
            file = open(self.__file,"w")
            file.write(self.__thisTextArea.get(1.0,END))
            file.close()
            
            # Change the window title
            self.__root.title(os.path.basename(self.__file) + " - Notepad")
            
        
    else:
        file = open(self.__file,"w")
        file.write(self.__thisTextArea.get(1.0,END))
        file.close()

def __cut(self):
    self.__thisTextArea.event_generate("<<Cut>>")

def __copy(self):
    self.__thisTextArea.event_generate("<<Copy>>")

def __paste(self):
    self.__thisTextArea.event_generate("<<Paste>>")

def run(self):

    # Run main application
    self.__root.mainloop()




file.add_command(label="New")
file.add_command(label="Open")
file.add_command(label="Save")
file.add_command(label="Save as...")
file.add_command(label="Close")

file.add_separator()

file.add_command(label="Exit", command=top.quit)

menubar.add_cascade(label="File", menu=file)
edit = Menu(menubar, tearoff=0)
edit.add_command(label="Undo")

edit.add_separator()

edit.add_command(label="Cut")
edit.add_command(label="Copy")
edit.add_command(label="Paste")
edit.add_command(label="Delete")
edit.add_command(label="Select All")


menubar.add_cascade(label="Edit", menu=edit)
help = Menu(menubar, tearoff=0)
help.add_command(label="About" ,command=showabout)
menubar.add_cascade(label="Help", menu=help)



top.config(menu=menubar)
top.mainloop()
