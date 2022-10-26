#include <iostream>
using namespace std;

int factorial(int n)
{
    int fact = 1;
    for (int i = 0; i < n; i++)
    {
        fact = fact * i;
    }
    return fact;
}
int nCr(int n, int r)
{
    int numt = factorial(n);
    int demt = factorial(r) * factorial(n - r);
    int ans = numt / demt;
    return ans;
}
int main()
{

    int n, r;
    cin >> n, r;

    int ans = nCr(n, r);
    cout << "Anver nCr : " << ans;
    return 0;
}