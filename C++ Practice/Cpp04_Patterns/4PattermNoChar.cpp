#include <iostream>
using namespace std;

int pat11(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << "* ";
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat12(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << i;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat13(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << j;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat21(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = i;
        while (j <= n)
        {
            cout << i;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat22(int n)
{
    int i = 1;
    while (i <= n)
    {
        int j = i;
        while (j <= n)
        {
            cout << j;
            j += 1;
        }
        i+=1;
    }
    return 0;
}
int pat31(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << i + 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}
int pat32(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = i;
        while (j <= n)
        {
            cout << j + 1;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}
int pat41(int n)
{
    int i = 1;

    while (i <= n)
    {
        int j = j;
        while (j <= n)
        {
            cout << i + j;
            j += 1;
        }
        cout << endl;
        i += 1;
    }
    return 0;
}

int pat51(int n){
    int i=1;
    int count=0;
    while (i<=n)
    {
        int j=1;
        while (j<=n)
        {
            cout<<count;
            count++;
            j+=1;
        }
        
        i+=1;
    }
    return 0;
    
}
int main()
{
    int n = 5;
    // cout << "\ni=1, j=1, *" << endl;
    // pat11(n);
    // cout << "\ni=1, j=1, i" << endl;
    // pat12(n);
    // cout << "\ni=1, j=1, j" << endl;
    // pat13(n);
    // cout << "\ni=1, j=i, i" << endl;
    // pat21(n);
    // cout << "\ni=1, j=i, j" << endl;
    // pat22(n);
    // cout << "\ni=1, j=1, i+1" << endl;
    // pat31(n);
    // cout << "\ni=1, j=1, j+1" << endl;
    // pat32(n);
    // cout << "\ni=1, j=1, i+j" << endl;
    // pat41(n);

    cout << "\ni=1, j=1, count" << endl;
    pat11(n);
}