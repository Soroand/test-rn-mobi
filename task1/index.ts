/**
 * First task function
 * @param arr : number[]
 */
function task1(arr: number[]): number[] | string {
  //Checking if array is actually array and has values
  if (arr?.length <= 0 || !Array.isArray(arr)) {
    return "Entry value is incorrect";
  }

  return arr.filter((item) => item % 2 === 0);
}
 
console.log(task1([1,2,3,4,5,6,7,8,10]));


