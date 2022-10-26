#include <iostream>
using namespace std;

int reverse(int x)
{
    int rev = 0;
    while (x != 0)
    {
        int pop = x % 10;
        x /= 10;
        if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && pop > 7))
            return 0;
        if (rev < INT_MIN / 10 || (rev == INT_MIN / 10 && pop < -8))
            return 0;
        rev = rev * 10 + pop;
    }
    return rev;
}
int onlyReverse(int x)
{
    int ans = 0;
    while (x != 0)
    {
        int a = x % 10;
        ans = (ans * 10) + a;
        x = x / 10;
    }
    return ans;
}
int safeReverse(int x)
{
    int ans = 0;
    while (x != 0)
    {
        int digit = x % 10;
        if ((ans > INT_MAX / 10) || (ans < INT_MIN / 10))
        {
            return 0;
        }

        ans = (ans * 10) + digit;
        x /= 10;
    }
    cout<<ans;
    return ans;
}
int main()
{
    safeReverse(123);
    // onlyReverse(123);
    return 0;
}
