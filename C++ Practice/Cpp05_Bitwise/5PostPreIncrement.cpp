#include <iostream>
using namespace std;

int main()
{ 
    // post increment
    int i=4;
    int a=i++;
    cout<<i<<"\n"<<a<<endl;
    int a2=2, i2=3;
    int sum1 = a2+i2++;
    cout<<sum1<<endl;
    cout<<"\n"<<i2;

    // pre increment
    int i = 11;
    cout << i << endl;
    int a = ++i;
    cout << i << endl;
    cout << a << endl;

    int sum = i + a;
    cout <<"Sum :  "<< sum << endl;

    
}