// your code goes here
interface ExecuteFunc<T> {
  execute: (arr: T[]) => T[];
}
module.exports = {
  concat: <T>(arr1: T[], arr2: T[]) => {
    return [...arr1, ...arr2];
  },
  map: <T>(
    arr: Array<T>,
    callback: (item: T, index: number) => any
  ): Array<T> => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = callback(arr[i], i);
    }
    return newArr;
  },
  filter: <T>(arr: Array<T>, callback: (item: T) => any): any => {
    for (let i = 0; i < arr.length; i++) {
      const newArr: T[] = [];
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
      return newArr;
    }
  },
  find: <T>(arr: Array<T>, callback: (item: T) => boolean | Array<T>) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
  },
  pipe: <T>(arr: T[], callbacks: ExecuteFunc<T>[]) => {
    let newArr = arr;
    for (let i = 0; i < callbacks.length; i++) {
      newArr = callbacks[i].execute(newArr);
    }

    return newArr;
  },
};
