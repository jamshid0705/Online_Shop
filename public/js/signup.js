const signup=async(name,email,pass,repass)=>{
  try {
    const res=await axios({
      method:'POST',
      url:'http://localhost:5000/api/v1/users/signup',
      data:{
        name:name,
        email:email,
        password:pass,
        passwordConfirm:repass
      }
    })
    console.log(res)
    if(res.status===200){
      alert('Siz ro\'yhatdan o\'tdingiz !')
       window.setTimeout(()=>{
        location.assign('/home')
       },500)
    }
  } catch (error) {
    
    alert("Sizda xatolik bor iltimos qayta urinib ko'ring !")
    window.setTimeout(()=>{
      location.assign('/signup')
     },500)
  }
}

document.querySelector('#signup').addEventListener('click',function(e){
  e.preventDefault()
  const name=document.querySelector('#name').value 
  const email=document.querySelector('#email').value
  const password=document.querySelector('#pass').value
  const passwordConfirm=document.querySelector('#re_pass').value
  signup(name,email,password,passwordConfirm)
  console.log(name,email,password,passwordConfirm)
})