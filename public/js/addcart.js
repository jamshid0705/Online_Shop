const carts = async (userId, productId, soni) => {
  const res = await axios({
    method: "POST",
    url: "http://localhost:5000/api/v1/carts",
    data: {
      soni: soni,
      product: productId,
      user: userId,
    },
  });
  if (res.status === 200) {
    alert("Bu mahsulot sizning cartdingizga qo'shildi !");
  }
};

document.querySelector(".px-3").addEventListener("click", (e) => {
  e.preventDefault();
  const userId = document.querySelector("#iduser").textContent;
  const productId = document.querySelector("#idproduct").textContent;
  const soni = document.querySelector("#cart").value;
  console.log(userId, productId, soni);
  carts(userId, productId, soni);
});
