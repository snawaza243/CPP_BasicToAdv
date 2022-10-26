// Check prime and non-prime number of user input

#include<iostream>
using namespace std;
int main()
{
    int i,n,num;
    cout<<"Enter number: ";
    cin>>n;

    for ( i = 0; i <= n; i++)
    {
        num = 2;
        if (num<n && n%2==0)
        {
            cout<<i;
        }

        else
        cout<<endl;
        
    }
        num = num + 2;

}