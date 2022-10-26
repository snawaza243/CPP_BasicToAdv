#include <iostream>
using namespace std;

int main()
{
    int n, m;
    cout << "Enter num1: ";
    cin >> n;

    /*
        switch (n )
        {
        case 1:
            cout << "One";
            break;

        case 2:
            cout << "Two";
            break;

        case 3:
            cout << "Three";
            break;
        case 4:
            cout << "Four";
            break;
        case 5:
            cout << "Five";
            break;

        case 'a':
            cout << "Apple";
            break;
        case 'b':
            cout << "Ball";
            break;
        case 'c':
            cout << "Camera";
            break;
        default:
            break;
        }*/

    cout << "Enter num2: ";
    cin >> m;

    cout << "Enter operation symbol: ";
    char ch;
    cin >> ch;
    switch (ch)
    {
    case '+':
        cout << (n + m) << endl;
        break;

    case '-':
        cout << (n - m) << endl;
        break;

    case '*':
        cout << (n * m) << endl;
        break;
    case '/':
        cout << (n / m) << endl;
        break;

    default:
        cout << "Choose a valid operation.";
        break;
    }

    return 0;
}