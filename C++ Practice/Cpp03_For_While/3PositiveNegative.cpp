// Check positive negative number of user input
#include <iostream>
using namespace std;
int main()
{
    // Check positive, negative of number
    int n;
    cout << "Check positive, negative of number: ";
    cin >> n;

    if (n > 0)
    {
        cout << "Number is positive. ";
    }
    else if (n < 0)
    {
        cout << "Number is negative.";
    }
    else
        cout << "Number is zero.";
}