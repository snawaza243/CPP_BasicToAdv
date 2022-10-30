#include <iostream>
#include <math.h>
using namespace std;

int main()
{

    int n = 35;
    int fac = 1;
    for (int i = 1; i <= n; i++)
    {
        fac = fac * i;
        cout << i << " factorial\t: "<< fac << endl;
    }
    return 0;
}