// Find all roots of a quadratic equation
#include <stdio.h>
#include <math.h>
int main()
{
    float a, b, c;

    printf(" \n\tQuadratic Equation \n ax^2 + bx + c = 0 \n\n");
    printf("Enter value of a, b, and c: ");
    scanf("%d%d%d", &a, &b, &c);

    float decrement = b * b - 4 * a * c;

    if (decrement > 0)
    {
        float gr1 = (-b + sqrt(decrement)) / (2 * a);
        float gr2 = (-b - sqrt(decrement)) / (2 * a);

        printf("Real uniq root. \n root1 = %f\n root1 = %f", gr1, gr2);
    }

    else if (decrement == 0)
    {
        float grt1 = -b /( 2 * a);
        printf("Real similar root\n root = %f", grt1);
    }

    else
    {
        float realpart = -b / (2 * a);
        float imagpart = sqrt(-decrement) / (2 * a);

        printf("Imaginary root \nRoot1: %f\nRoot2: %f", realpart, imagpart);
    }

    getchar;
    return 0;
}