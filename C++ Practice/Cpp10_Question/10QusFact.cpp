#include <iostream>
#include<math.h>
using namespace std;

int main()
{
    int n = 58;
    int fac = 1;
    for (int i = 1; i <= n; i++)
    {
        fac = fac * i;
    }

    cout << fac;
    return 0;
}