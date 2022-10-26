// Find the sum of two digit three digit input number

#include <iostream>
using namespace std;

int sumTwoNum(int n)
{
    int a, b;
    int nn = n;

    a = n % 10;
    n = n / 10;
    b = n % 10;

    cout << "Sum of two digit number " << nn << " is " << a + b;
    return 0;
}

int sumThreeNum(int n)
{
    int a, b, c;
    int nn = n;

    a = n % 10;
    n = n / 10;
    b = n % 10;
    n = n / 10;
    c = n % 10;

    cout << "Sum of three digit number " << nn << " is " << a + b + c;
    return 0;
}

int main()
{
    int n;
    int a, b, c;

    cout << "Enter two/three digit number: ";
    cin >> n;

    if (n < 100)
    {
        sumThreeNum(n);
    }
    else
        sumThreeNum(n);

    return 0;
}