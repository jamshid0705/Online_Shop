const signin=async(email,password)=>{
  try {
    const res=await axios({
      method:'POST',
      url:"http://localhost:5000/api/v1/users/signin",
      data:{
        email:email,
        password:password
      }
    })

    console.log(res)
    if(res.status===200){
      alert('Siz yana tizimga kirdingiz !')
      window.setTimeout(()=>{
        location.assign('/home')
      })
    }
  } catch (error) {
    alert('Sizda xatolik iltimos yana urinib ko\'ring')
    window.setTimeout(()=>{
      location.assign('/signin')
     },500)
  }
}

document.querySelector('#signin').addEventListener('click',function(e){
  e.preventDefault()
  const email=document.querySelector('#email').value 
  const password=document.querySelector('#your_pass').value 
  signin(email,password)
})