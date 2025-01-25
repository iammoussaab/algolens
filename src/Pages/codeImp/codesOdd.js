
const codesOdd = {
    "C": `
void oddEvenSort(int* arr, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int i = 1; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = 0;
            }
        }

        for (int i = 0; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = 0;
            }
        }
    }
}`,

    "C++": `
void oddEvenSort(int* arr, int n) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (int i = 1; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }

        for (int i = 0; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }
    }
}`,

    "Java": `
public static void oddEvenSort(int[] arr, int n) {
    boolean sorted = false;
    while (!sorted) {
        sorted = true;
        for (int i = 1; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }

        for (int i = 0; i < n-1; i+=2) {
            if (arr[i] > arr[i+1]) {
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }
    }
}`,

    "JavaScript": `
function oddEvenSort(list) {
  const sorted = false;
  while (!sorted) {
    sorted = true;
    for (const i = 1; i < list.length - 1; i += 2) {
      if (list[i] > list[i+1]) {
        [list[i], list[i+1]] = [list[i+1], list[i]]
        sorted = false;
      }
    }
    for (const i = 0; i < list.length - 1; i += 2) {
      if (list[i] > list[i+1]) {
        [list[i], list[i+1]] = [list[i+1], list[i]]
        sorted = false;
      }
    }
  }
}`,

    "Python": `
def odd_even_sort(L):
    sorted = False
    while not sorted:
        sorted = True
        for i in range(1, len(L)-1, 2):
            if L[i] > L[i+1]:
                L[i], L[i+1] = L[i+1], L[i]
                sorted = False

        for i in range(0, len(L)-1, 2):
            if L[i] > L[i+1]:
                L[i], L[i+1] = L[i+1], L[i]
                sorted = False`
}
export default codesOdd;
