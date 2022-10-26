// How to take input and output in cpp

#include <iostream>
using namespace std;

int main()
{
    int a, b;

    cout << "Enter A number: \n";
    cin >> a;
    cout << "Enter B number: \n";
    cin >> b;

    if (a > b)
    {
        cout << "Number A is greater than B.";
    }
    else
    {
        cout << "Number B is greater than A." << endl;
    }
}