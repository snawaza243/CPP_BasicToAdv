#include <iostream>
#include <math.h>
using namespace std;
int fact(int n)
{
    int fac = 1;
    for (int i = 0; i < n; i++)
    {
        fac = fac * i;
    }
    return fac;
}

int main()
{

    for (int i = 0; i < 32; i++)
    {
        if (fact(58) / pow(10, i))
        {
            cout<<i;
        }
    }
    

    return 0;
}