
const detail=async(id)=>{
  try {
    const res=await axios({
      method:'GET',
      url:`http://localhost:5000/api/v1/products/${id}`,
      data:{
        id:id
      }
    })

    if(res.status==200){
      alert('Success')
    }
  } catch (error) {
    alert(err.response.data.message)
  }
}

document.querySelector('.carousel-control-next').addEventListener('click',function(e){
  e.preventDefault()
  const active=document.querySelector('.carousel-item')
  console.log(active)
})
