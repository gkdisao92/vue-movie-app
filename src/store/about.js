export default {
  namespaced: true,
  // 데이터의 불변성을 위해 함수로 만들어 준다.
  state: () =>({
    name: 'Wonseok',
    email: 'wonseok@naver.com',
    blog: 'https://heropy.blog',
    phone: '+82-10-1111-1111',
    image: 'https://heropy.blog/css/images/logo.png'
  })
}