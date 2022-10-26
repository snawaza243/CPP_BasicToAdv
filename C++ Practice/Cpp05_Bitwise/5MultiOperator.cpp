#include <iostream>
using namespace std;

int main()
{ 
    

    int n = 10;
    int i = 1;
    for (;;)
    {
        if (i <= n)
        {
            cout << i << endl;
        }
        else
        {
            break;
        }
        i++;
    }

    int n = 10;
    for (int a = 0, b = 1, c = 2; a >= 0 && b >= 1 && c >= 2; a--, b--, c--)
    {
        cout << a << " " << b << " " << c << " " << endl;
    }

    int n = 10;
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }
    cout << sum << endl;

    
}