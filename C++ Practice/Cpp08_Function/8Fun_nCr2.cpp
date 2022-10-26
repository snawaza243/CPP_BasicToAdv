#include <iostream>
using namespace std;

int fact(int n)
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
    int num = fact(n);
    int demo = fact(r) * fact(n - r);
    // cout << num / demo;
    return num / demo;
}
int main()
{

    return 0;
}