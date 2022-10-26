#include <iostream>
using namespace std;

int main()
{

    int n = 235;
    while (n < 0)
    {
        int prod = 1;
        int sum = 0;
        int digit = n % 10;
        prod += n;
        sum += n;
        n = n / 10;

        int res = prod - sum;
        cout << res;

    }
    return 0;
}