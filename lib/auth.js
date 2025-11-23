module.exports = {
  IsOnwer:function (request, response) { // this로 아래 함수에서 활용할 함수
    if(request.session.is_logined) {
      return true
    } else {
      return false
    }, 
  statusUI:function(request, response) {
  var authStatusUI = '<a href="/auth/login">login</a>';
  if(this.IsOwner(request, response) { // 같은 파일 내에 있는 함수 들고 올 땐 this
     authStatusUI = `${request.session.nickname} / <a href='/auth/login'>logout</a>`; // UI
  }
  return authStatusUI;
  }
}

