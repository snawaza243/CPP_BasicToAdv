// Find all roots of a quadratic equation
#include <stdio.h>
#include <math.h>
int main()
{
    double a,b,c;
    double dis, r1, r2;
    double realr, imgr;

    printf(" \n\tQuadratic Equation \n ax^2 + bx + c = 0 \n\n");
    printf("Enter value of a, b, and c: ");
    scanf("%lf %lf %lf", &a, &b, &c);

    dis = b * b - 4 * a * c;

    if (dis > 0)
    {
        r1 = (-b + sqrt(dis)) / (2 * a);
        r2 = (-b - sqrt(dis)) / (2 * a);

        printf("Real unique root. \n Root = %.2lf\n Root1 = .2l%f", r1, r2);
    }

    else if (dis == 0)
    {
        r1 = r2 = -b / (2 * a);
        printf("Real similar root\n root = %f", r1);
    }

    else
    {
        realr = -b / (2 * a);
        imgr = sqrt(-dis) / (2 * a);

        printf("Imaginary root \nRoot1: %.2f +  %.2lf\nRoot2: %.2lf", realr, imgr);
    }

    return 0;
}