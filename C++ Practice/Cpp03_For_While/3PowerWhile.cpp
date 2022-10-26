#include <iostream>
#include <math.h>
using namespace std;

int main()
{

    int n = 1010;
    int i = 0;
    int ans = 0;
    while (n != 0)
    {
        int dig = n % 10;
        ans = (dig * pow(10, i)) + ans;
        n = n/10;
        i++;
    }

    cout<<ans;

    return 0;
}