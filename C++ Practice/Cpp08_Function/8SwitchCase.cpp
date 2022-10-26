// Ltr8 Switch

#include <iostream>
using namespace std;
int main()
{
    int number;
    cout<<"Enter a number: ";
    cin>>number;

// break
    switch (number)
    {
    case 1:
        cout << "First put";
        break;
    case 2:
        cout << "Second output";
        break;
    case 3:
        cout << "Third output";
        break;

    default:
        break;
    }
}