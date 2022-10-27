from tkinter import *
from tkinter.messagebox import showinfo
from gtts import gTTS
import speech_recognition as sr
import os

mainwindow = Tk()
mainwindow.title('T2V | V2T')
mainwindow.geometry('450x350')
mainwindow.resizable(0, 0)
mainwindow.configure(bg='light green')


def say(text1):
    language = 'en'
    speech = gTTS(text=text1, lang=language, slow=False)
    speech.save("text.mp3")
    os.system("start text.mp3")


def recordvoice():
    while True:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            audio = r.listen(source)
            try:
                text1 = r.recognize_google(audio, language="en-IN")
            except:
                pass
            return text1


def TextToSpeech():
    texttospeechwindow = Toplevel(mainwindow)
    texttospeechwindow.title('T2S | Text to Speech')
    texttospeechwindow.geometry("450x250")
    texttospeechwindow.configure(bg='Blue')

    Label(texttospeechwindow, text='T2S | Text to Speech',
          font=("Times New Roman", 15),justify= RIGHT, bg='Blue').place(x=50)

    text = Text(texttospeechwindow, height=5, width=30, font=12)
    text.place(x=7, y=60)

    speakbutton = Button(texttospeechwindow, text='listen',
                         bg='coral', command=lambda: say(str(text.get(1.0, END))))
    speakbutton.place(x=140, y=200)


def SpeechToText():
    speechtotextwindow = Toplevel(mainwindow)
    speechtotextwindow.title('S2T |Speech to Text')
    speechtotextwindow.geometry("450x250")
    speechtotextwindow.configure(bg='pink')

    Label(speechtotextwindow, text='S2T |Speech to Text',
          font=("Comic Sans MS", 15), bg='IndianRed').place(x=50)

    text = Text(speechtotextwindow, font=12, height=3, width=30)
    text.place(x=7, y=100)

    recordbutton = Button(speechtotextwindow, text='Record',
                          bg='Sienna', command=lambda: text.insert(END, recordvoice()))
    recordbutton.place(x=140, y=50)


Label(mainwindow, text='T2V | V2T',
      font=('Times New Roman', 16, ), bg='blue', wrap=True, wraplength=450).place(x=25, y=0)

texttospeechbutton = Button(mainwindow, text='T2S | Text to Speech',
                            font=('Times New Roman', 16), bg='Purple', command=TextToSpeech)
texttospeechbutton.place(x=100, y=150)

speechtotextbutton = Button(mainwindow, text='S2T | Speech to Text',
                            font=('Times New Roman', 16), bg='Purple', command=SpeechToText)
speechtotextbutton.place(x=100, y=250)

mainwindow.update()
mainwindow.mainloop()
