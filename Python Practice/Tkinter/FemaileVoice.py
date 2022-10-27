import pyttsx as pt
from pyttsx import engine
import pyttsx3


from pyttsx import voice
engine = pt.init()
voices = engine.getProperty('voices')
#engine.setProperty('gender', 'female') # also does not work
engine.setProperty('female', voice.Voice.gender) #not even
engine.setProperty('female', voice.gender) #does not work
engine.setProperty('voice', voices[4].id)
engine.say("Hello World")
engine.runAndWait()


class Voice(object):
    def __init__(self, id, name=None, languages=[], gender=None, age=None):
        self.id = id
        self.name = name
        self.languages = languages
        self.gender = gender
        self.age = age