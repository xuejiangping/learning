/**
 * 比较 和 交换 工具函数
 */
const compareFn = (a,b) => a > b
const exchangeFn = (arr,i,j) => ([arr[j],arr[i]] = [arr[i],arr[j]],arr)

/**
 * 生成测试随机数组
 */
function randomIntArray(length = 5,range = 100) {
  return Array.from({ length },() => Math.round(Math.random() * range))
}
/**
 * 洗牌算法，打乱数组顺序
 * @param {*} arr 
 * @returns 
 */
function shuffle(arr) {
  const setRandomIndex = () => Math.floor(Math.random() * arr.length)
  for (let i = 0; i < arr.length; i++) {
    exchangeFn(arr,i,setRandomIndex())
  }
  return arr
}

/**
 *  冒泡排序
 */

let arr = [24,4,1,41,6,47]

/**
 * 核心：
 *    1. 比较
 *    2. 交换
 * @param {number[]} arr 待排序数组
 * @returns 排序后的数组
 */
function sort2(arr) {
  const length = arr.length
  for (let k = 0; k < length - 1; k++) {
    for (let i = 0; i < length - k; i++) {
      let j = i + 1
      if (j === arr.length) break
      if (compareFn(arr[i],arr[j])) exchangeFn(arr,i,j)
    }
  }
  return arr
}

// console.log('sort1(arr)',sort1(arr))
// console.log('sort2(arr)',sort2(randomIntArray(5)))


/**
 * 选择排序
 */

function selectSort(arr) {
  const length = arr.length
  for (let j = 0; j < length - 1; j++) {
    let tempIndex = 0
    for (let i = 0; i < length - j; i++) {
      if (compareFn(arr[i],arr[tempIndex])) tempIndex = i
    }
    exchangeFn(arr,tempIndex,length - 1 - j)
  }
  return arr
}

// console.log('selectSort(randomIntArray(5))',selectSort(randomIntArray(5)))

/**
 * 简易快速排序
 * 1.取数组第一个，比它小的放左边，比它大的放右边
 */
function quickSort(arr) {
  const leader = arr[0]
  let left = [],right = []
  for (let i = 1; i < arr.length; i++) {
    arr[i] < leader ? left.push(arr[i]) : right.push(arr[i])
  }
  if (left.length > 1) left = quickSort(left)
  if (right.length > 1) right = quickSort(right)
  return left.concat(leader,right)
}
// let randomArr = randomIntArray(10)
// console.log('randomArr',randomArr)
// console.log('quickSort(randomArr)',quickSort(randomArr))

/**
 * 标准的快速排序
 * 
 */

function quickSort2(arr,start,end) {
  let leader = arr[0]
  let left = start,right = end
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < leader) left++
  // }
  // for (let j = arr.length - 1; j >= 0; j--) {
  //   if (arr[j] > leader) right--
  // }
  while (left < right) {
    while (arr[left++] <= leader) { }
    while (arr[right--] > leader) { }
    exchangeFn(arr,left,right)

  }
  return arr
}
// console.log(quickSort2(arr,0,arr.length - 1))

