const reviews = async (userId, productId, rating, review) => {
  const res = await axios({
    method: "POST",
    url: "http://localhost:5000/api/v1/reviews",
    data: {
      review: review,
      rating: rating,
      product: productId,
      user: userId,
    },
  });
  if (res.status === 200) {
    alert("Sizning reviewingiz yuborildi !");
  }
};

document.querySelector("#review").addEventListener("click", (e) => {
  e.preventDefault();
  const userId = document.querySelector("#iduser").textContent;
  const productId = document.querySelector("#idproduct").textContent;
  const rating = document.querySelector("#rating").value;
  const review = document.querySelector("#message").value;
  console.log(userId, productId, rating, review);
  reviews(userId, productId, rating, review);
  document.querySelector("#rating").value = " ";
  document.querySelector("#message").value = "  ";
});
