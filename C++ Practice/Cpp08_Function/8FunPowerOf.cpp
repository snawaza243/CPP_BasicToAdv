#include <iostream>
using namespace std;
// function 
int power(int n, int m)
{
    int ans = 1;
    for (int i = 0; i < m; i++)
    {
        ans = ans * n;
    }
    return ans;
}
int main()
{
    int a, b;
    cout << "Power of ";
    cin >> a;
    cout << "Power upto ";
    cin >> b;
    int ans = power(a, b);
    cout<<ans;

    return 0;
}