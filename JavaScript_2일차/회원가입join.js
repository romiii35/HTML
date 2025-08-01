// 제출 이벤트를 받는다(이벤트 핸들링)

// 제출된 입력 값들을 참조한다.

// 입력값에 문제가 있는 경우 이를 감지한다.

// 가입 환영 인사를 제공한다.

 //이름 없이 쓰이는 함수 = 익명함수


const form = document.getElementById("form")

form.addEventListener("submit", function(event){
  event.preventDefault() //기존 기능 차단

  let userID = event.target.id.value
  let userpw1 = event.target.pw1.value
  let userpw2 = event.target.pw2.value
  let userName = event.target.name.value
  let userPhone = event.target.phone.value
  let userPosition = event.target.position.value
  let userGender = event.target.gender.value
  let userEmail = event.target.email.value
  let userIntro = event.target.intro.value

  if(userID.lenth < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
    return
  }
  if(userpw1.lenth < 8){
    alert("비밀번호가 너무 짧습니다. 8자 이상 입력해주세요.")
    return
  }


    if(userpw1 !=userpw2){
    alert("비밀번호가 일치하지 않습니다.")
    return
  }

  //가입 잘되었다!!환영~!
  document.body.innerHTML = ""
  document.write(`<p> ${userID}님 가입을 환영합니다</p>`)
  document.write(`<p> 회원 가입 시 입력하신 내역은 다음과 같습니다.</p>`)
  document.write(`<p> 아이디 : ${userID}</p>`)
  document.write(`<p> 이름 : ${userName}</p>`)
  document.write(`<p> 전화번호 : ${userPhone}</p>`)
  document.write(`<p> 원하는 직무 : ${userPosition}</p>`)

  
  console.log(userID, userpw1, userpw2, userName, userPhone, 
    userPosition, userGender, userEmail, userIntro)
})