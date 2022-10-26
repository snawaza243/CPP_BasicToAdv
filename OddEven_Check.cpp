// Check odd and even to the user input
#include <iostream>
using namespace std;
int main()
{

    // 4. check odd even
    int n;
    cout << "Enter a number: ";
    cin >> n;
    int mod = n % 2;
    if (n%2==0)
    {
        cout << "Number is odd.";
    }
    else if (n%2!=0)
    {
        cout << "Number is even.";
    }
    else
    cout<<"Not define";

    // // using ternary operator 
    // (n%2==0)? (cout<<"Odd") : cout<<"Even";

}
