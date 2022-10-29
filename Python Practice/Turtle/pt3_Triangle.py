import turtle

ttr = turtle.Turtle()

# for i in range(1):
#     ttr.forward(100)
#     ttr.left(90+45)
#     ttr.forward(100)
#     ttr.left(45+45)
#     ttr.forward(100)
#     ttr.left(90+45)
#     ttr.forward(38)
    

# for j in range(1):
#     ttr.forward(100)
#     ttr.left(120)
#     ttr.forward(100)
#     ttr.left(120)
#     ttr.forward(100)



sides = 3
sideLength = 100
angle = 360.0/sides

for i in range(sides):
    ttr.forward(sideLength)
    ttr.left(angle)
    
    
turtle.done()
