import tkinter as tk
from functools import partial

history = []  # store history values

def change_zahl(num):
    if double_var.get():
        num += num
    val = counter.get()
    counter.set(val-num)
    history.append(val) # store last value to history

def undo():
    if history:
        val = history.pop()
        counter.set(val)

app = tk.Tk()

tk.Button(app, text="-1", command=partial(change_zahl, 1)).pack()
tk.Button(app, text="-2", command=partial(change_zahl, 2)).pack()
tk.Button(app, text="-3", command=partial(change_zahl, 3)).pack()
double_var = tk.BooleanVar()
tk.Checkbutton(app, text="Double", variable=double_var, indicator=0).pack()
tk.Button(app, text="Undo", command=undo).pack()

counter = tk.IntVar(value=50)
Zahl = tk.Label(app, textvariable=counter, font="Verdana 20 bold")
Zahl.pack()

app.mainloop()