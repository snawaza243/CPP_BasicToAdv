#include <iostream>
using namespace std;

// 1 -> Prime
// 0 -> Not Prime
bool isPrime(int n)
{
    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            return 0; //not prime
        }
    }
    return 1;
}
int main()
{
    int n = 7;
    if (isPrime(n))
    {
        cout << " is a prime no.";
    }
    else
        cout << " not a prime no.";

    isPrime(n);
    return 0;
}

/*

1. ap = (3*n +7)

2. a&b , total no of set bit in a & b
    a=2=10
    b=3=11
    ans 3

3. fibonaci seriese


*/