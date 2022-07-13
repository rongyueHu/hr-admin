import request from '@/utils/request'
/**
 *
 * @param {登录接口} data
 * @returns
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
