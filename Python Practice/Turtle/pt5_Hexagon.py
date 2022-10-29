import turtle

ttr = turtle.Turtle()

sides = 6
sideLength = 70

angle = 360.0/sides

for i in range(sides):
    ttr.forward(sideLength)
    ttr.right(angle)

turtle.done()
