const codesStooge = {
	"C": `
void stoogeSort(int arr[], int l, int h)
{
    if (l >= h)
        return;

    if (arr[l] > arr[h])
        swap(&arr[l], &arr[h]);

    if (h - l + 1 > 2)
    {
        int t = (h - l + 1) / 3;

        stoogeSort(arr, l, h - t);
        stoogeSort(arr, l + t, h);
        stoogeSort(arr, l, h - t);
    }
}

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}`,

	"C++": `
void stoogeSort(int arr[], int l, int h)
{
    if (l >= h)
        return;

    if (arr[l] > arr[h])
        swap(arr[l], arr[h]);

    if (h - l + 1 > 2)
    {
        int t = (h - l + 1) / 3;

        stoogeSort(arr, l, h - t);
        stoogeSort(arr, l + t, h);
        stoogeSort(arr, l, h - t);
    }
}

void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}`,

	"Java": `
void stoogeSort(int arr[], int l, int h)
{
    if (l >= h)
        return;

    if (arr[l] > arr[h])
    {
        int temp = arr[l];
        arr[l] = arr[h];
        arr[h] = temp;
    }

    if (h - l + 1 > 2)
    {
        int t = (h - l + 1) / 3;

        stoogeSort(arr, l, h - t);
        stoogeSort(arr, l + t, h);
        stoogeSort(arr, l, h - t);
    }
}`,

	"JavaScript": `
function stoogeSort(arr, l, h)
{
    if (l >= h)
        return;

    if (arr[l] > arr[h])
        [arr[l], arr[h]] = [arr[h], arr[l]];

    if (h - l + 1 > 2)
    {
        const t = Math.floor((h - l + 1) / 3);

        stoogeSort(arr, l, h - t);
        stoogeSort(arr, l + t, h);
        stoogeSort(arr, l, h - t);
    }
}`,

	"Python": `
def stoogeSort(arr, l, h):
    if l >= h:
        return

    if arr[l] > arr[h]:
        arr[l], arr[h] = arr[h], arr[l]

    if h - l + 1 > 2:
        t = (h - l + 1) // 3

        stoogeSort(arr, l, h - t)
        stoogeSort(arr, l + t, h)
        stoogeSort(arr, l, h - t)`
};
export default codesStooge;
