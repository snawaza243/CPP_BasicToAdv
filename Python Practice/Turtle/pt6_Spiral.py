import turtle

ttr = turtle.Turtle()
root = turtle.Screen()
root.bgcolor("light pink")
root.title("My Turtle Design | Square spiral")
ttr.color("blue")

def sqrFun(size):
    for i in range(4):
        ttr.forward(size)
        ttr.left(90)
        size = size-10

def sizeFun(sizeA):
    while (sizeA > 0):
        sqrFun(sizeA)
        sizeA = sizeA-10
sizeFun(200)
turtle.done()