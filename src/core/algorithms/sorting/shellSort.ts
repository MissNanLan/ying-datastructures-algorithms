import { DefalutListType, defaultCompare, Compare } from 'core/utils'
const ShellSort = (
    list: DefalutListType,
    compareFn = defaultCompare,
): DefalutListType => {
    const gaps: DefalutListType = [5, 3, 1] // 定义步长以及分割次数
    const len: number = list.length
    for (let g = 0, gLen: number = gaps.length; g < gLen; ++g) {
        // 按步长的长度K，对数组进行K趟排序
        for (let i = gaps[g]; i < len; ++i) {
            const temp = list[i]
            let j: number
            for (
                j = i;
                compareFn(j, gaps[g]) !== Compare.LESS_THAN &&
                compareFn(list[j - gaps[g]], list[i]) === Compare.BIGGER_THAN;
                j -= gaps[g]
            ) {
                list[j] = list[j - gaps[g]]
            }
            list[j] = temp
        }
    }
    return list
}
export default ShellSort
