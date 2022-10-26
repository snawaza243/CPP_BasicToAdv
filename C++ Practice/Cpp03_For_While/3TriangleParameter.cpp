// Program to check possible triangle

#include <iostream>
using namespace std;

int main()
{
    // check parameter of triangle
    int a, b, c;
    cout << "Enter side a of triangle: ";
    cin >> a;

    cout << "Enter side b of triangle: ";
    cin >> b;

    cout << "Enter side c of triangle: ";
    cin >> c;

    if (a + b > c && c != 0)
    {
        cout << "Triangle possible";
    }
    else if (a + c > b && b != 0)
    {
        cout << "Triangle possible";
    }
    else if (b + c > a && a != 0)
    {
        cout << "Triangle possible";
    }

    else
    {
        cout << "Triangle is not possible";
    }
    return 0;
}