exports.handler = async function(event, context){
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'wonsoek',
      age : 30,
      email: 'gkdisao92@naver.com'
    })
  }
}