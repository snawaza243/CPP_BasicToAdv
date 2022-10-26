#include <iostream>
using namespace std;
int getMin(int num[], int n)
{
    int mini = INT_MAX;

    for (int i = 0; i < n; i++)
    {
        // if (num[i] < min)
        // {
        //     min = num[i];
        // }
        mini= min(mini, num[i]);
    }

    return mini;
}

int getMax(int num[], int n)
{
    int max = INT_MIN;

    for (int i = 0; i < n; i++)
    {
        if (num[i] > max)
        {
            max = num[i];
        }
    }
    return max;
}

int main()
{

    int size;
    cin >> size;

    int arr[100];

    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

    cout << "Max = " << getMax(arr, size) << endl;
    cout << "Min = " << getMin(arr, size);

    return 0;
}