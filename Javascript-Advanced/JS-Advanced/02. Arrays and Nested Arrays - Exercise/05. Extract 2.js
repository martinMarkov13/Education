function extractIncreasingSequence(elements) {
    return elements.reduce((arr, element) => {
        if (element >= (arr[arr.length - 1] || elements[0])) {
            arr.push(element)
        }
        return arr
    }, [])
}
console.log(extractIncreasingSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));