#include <iostream>
using namespace std;

int main()
{
    int n;
    int a, b, c;

    cout << "Enter three digit number: ";
    cin >> n;
    //153
    int nn = n; //153
    a = n % 10; //3
    n = n / 10; // 15
    b = n % 10; //5
    c = n / 10; // 1

    a = a * a * a; // 3*3*3=27
    b = b * b * b; // 5*5*5=125
    c = c * c * c;
    int sum = a + b + c;

    if (sum == nn)
    {
        cout << "Number " << nn << " is an Armstrong number." << endl;
    }

    // else if (nn<100 || nn >10)
    // {
    //     cout<<"Entered number is a two digit "<<endl;
    // }
    // else if (nn<10 || nn>=0)
    // {
    //     cout<<"Entered number is an one digit.";
    // }

    // else if (nn<0){
    //      cout<<" Entered number is negative. Not valid.";
    // }
    else
    {
        cout << "Number " << nn << " is not an Armstrong number." << endl;
    }

    return 0;
}