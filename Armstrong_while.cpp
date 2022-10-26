// Program to check armstrong number using while

#include <iostream>
using namespace std;

int main()
{
    int n = 100;

    while (n <= 500)
    {
        int a, b, c;
        // cou<<"Enter number under 50"
        int n = 100;

        int nn;
        nn = n;
        a = n % 10;
        n = n / 10;
        b = n % 10;
        c = n / 10;

        int sum = (a * a * a) + (b * b * b) + (c * c * c);

        if (sum == nn)
        {
            cout << "The number " << n << " is an armstrong.";
        }

        n++;
    }

    return 0;
}