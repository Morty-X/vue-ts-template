interface FormatOptions {
  precision?: number; // 小数位数 (默认1位)
  forceDecimal?: boolean; // 是否强制显示小数位 (默认false)
}
/**
 * 数字格式化的组合式API
 */
export function useNumberFormatter() {
  const units = [
    { value: 100000000, symbol: '亿' },
    { value: 10000, symbol: '万' },
  ];

  const format = (num: number, options?: FormatOptions): string => {
    if (typeof num !== 'number') return '-';

    const { precision = 1, forceDecimal = false } = options || {};
    let result = '';

    for (const unit of units) {
      if (Math.abs(num) >= unit.value) {
        const formatted = num / unit.value;
        // 处理精度和小数点
        const fixedNum = formatted.toFixed(precision);
        // 移除不必要的 .0
        result = forceDecimal
          ? fixedNum
          : fixedNum.replace(/\.0+$|(\.\d*[1-9])0+$/, '$1');
        return `${result}${unit.symbol}`;
      }
    }

    // 小于1万直接返回原数字
    return num.toString();
  };

  return { format };
}
