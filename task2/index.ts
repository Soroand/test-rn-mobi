/**
 * Second task function
 * @param arr : number[]
 */

function task2(arr: number[]): number | string{

    if (arr?.length <= 0 || !Array.isArray(arr)) {
      return "Entry value is incorrect";
    }

  // VERSION ONE
    const result = arr.reduce((acc, val) => {
      if (val % 2 !== 0){
        acc += val
      }
      return acc
    },0)
    return result


  // VERSION TWO
  //   let result = 0;
  //   arr.filter(item => item % 2 !== 0).forEach(item => {
  //     if(item % 2 !== 0){
  //       result += item
  //     }
  //   })
  //   return result

}
  
console.log(task2([1,2,3,4,5,6,7,8,10]))