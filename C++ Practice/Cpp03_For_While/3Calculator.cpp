// making calculator with if else

#include <iostream>
using namespace std;

int main()
{

    int x, n1, n2;

    cout << "What do you want to calculate?\n";
    cout << "1. Add \n2. Subtract \n3. Product \n4. Divide\n\n";
    cin >> x;
    cout << "Enter first number: ";
    cin >> n1;
    cout << "Enter second number: ";
    cin >> n2;
    if (x == 1)
    {
        cout << n1 + n2;
    }
    else if (x == 2)
    {
        cout << n1 - n2;
    }
    else if (x == 3)
    {
        cout << n1 * n2;
    }
    else if (x == 4)
    {
        cout << n1 / n2;
    }

    return 0;
}