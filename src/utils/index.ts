/**
 * 工具函数封装
 */

/**
 * 手机号加密
 * @example
 * 17611000011 => 176****0011
 */
export const formateMobile = (mobile?: number) => {
  if (!mobile) return '-'
  const phone = mobile.toString()
  return phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
}
