import turtle

root = turtle.Screen()
turtle.speed(100)


# for i in range(100):
#     turtle.circle(5*i)
#     turtle.circle(-5*i)
#     turtle.left(i)

for i in range(100):
    turtle.circle(i)
    turtle.left(i)


turtle.exitonclick()