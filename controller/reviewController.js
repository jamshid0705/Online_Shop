const catchError=require('../utility/catchError')
const Review=require('../models/reviewModel')

const getAllReview=catchError(async(req,res,next)=>{
   const data=await Review.find().populate({
    path:"user"
   }).populate({
    path:"product"
   })

   res.status(200).json({
    status:"success",
    results:data.length,
    data:data
   })
})


const addReview=catchError(async(req,res,next)=>{
  const data = await Review.create([
    {
      review:
        "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
      rating: 5,
      user: "62ecf28e34e16d628d82af58",
      product: "62ecbc2d2bd12148f9781f1d",
    },
    {
      review:
        "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
      rating: 4,
      user: "62ecf28e34e16d628d82af58",
      product: "62ecbc2d2bd12148f9781f1c",
    },
    {
      review:
        "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
      rating: 5,
      user: "62ecf28e34e16d628d82af58",
      product: "62ecbc2d2bd12148f9781f1e",
    },
    {
      review:
        "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
      rating: 4,
      user: "62ecf28e34e16d628d82af58",
      product: "62ecbc2d2bd12148f9781f21",
    },
    {
      review:
        "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
      rating: 5,
      user: "62ecf2a634e16d628d82af5a",
      product: "62ecbc2d2bd12148f9781f23",
    },
    {
      review:
        "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
      rating: 5,
      user: "62ecf2a634e16d628d82af5a",
      product: "62ecbc2d2bd12148f9781f22",
    },
    {
      review:
        "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
      rating: 5,
      user: "62ecf2a634e16d628d82af5a",
      product: "62ecbc2d2bd12148f9781f24",
    },
    {
      review:
        "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
      rating: 4,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f25",
    },
    {
      review:
        "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
      rating: 5,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f26",
    },
    {
      review:
        "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
      rating: 4,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f27",
    },
    {
      review:
        "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
      rating: 5,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f28",
    },

    {
      review:
        "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
      rating: 5,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f29",
    },
    {
      review:
        "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
      rating: 4,
      user: "62ecf2d034e16d628d82af5e",
      product: "62ecbc2d2bd12148f9781f2a",
    },
    {
      review:
        "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
      rating: 5,
      user: "62ecf2d034e16d628d82af5e",
      product: "62ecbc2d2bd12148f9781f2b",
    },
    {
      review:
        "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
      rating: 4,
      user: "62ecf2da34e16d628d82af60",
      product: "62ecbc2d2bd12148f9781f2c",
    },
    {
      review:
        "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
      rating: 5,
      user: "62ecf2da34e16d628d82af60",
      product: "62ecbc2d2bd12148f9781f20",
    },
    {
      review:
        "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
      rating: 5,
      user: "62ecf2ed34e16d628d82af62",
      product: "62ecbc2d2bd12148f9781f1f",
    },
    {
      review:
        "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
      rating: 5,
      user: "62ecf2ed34e16d628d82af62",
      product: "62ecbc2d2bd12148f9781f2f",
    },
    {
      review:
        "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
      rating: 4,
      user: "62ecf2ed34e16d628d82af62",
      product: "62ecbc2d2bd12148f9781f30",
    },
    {
      review:
        "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
      rating: 5,
      user: "62ecf30634e16d628d82af66",
      product: "62ecbc2d2bd12148f9781f2e",
    },
    {
      review:
        "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
      rating: 4,
      user: "62ecf30634e16d628d82af66",
      product: "62ecbc2d2bd12148f9781f2d",
    },
    {
      review:
        "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
      rating: 5,
      user: "62ecf30634e16d628d82af66",
      product: "62e7450e810df1f6e3096e0c",
    },

    {
      review:
        "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
      rating: 5,
      user: "62ecf31f34e16d628d82af68",
      product: "62e7450e810df1f6e3096e0a",
    },

    {
      review:
        "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
      rating: 4,
      user: "62ecf31f34e16d628d82af68",
      product: "62e7450e810df1f6e3096e09",
    },
    {
      review:
        "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
      rating: 5,
      user: "62ecf31f34e16d628d82af68",
      product: "62ecbc2d2bd12148f9781f1f",
    },
    {
      review:
        "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
      rating: 4,
      user: "62ecf31f34e16d628d82af68",
      product: "62ecbc2d2bd12148f9781f2a",
    },
    {
      review:
        "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
      rating: 5,
      user: "62ecf31f34e16d628d82af68",
      product: "62e7450e810df1f6e3096e0f",
    },
    {
      review:
        "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
      rating: 5,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f2c",
    },
    {
      review:
        "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
      rating: 5,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62ecbc2d2bd12148f9781f2c",
    },
    {
      review:
        "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
      rating: 4,
      user: "62ecf2bd34e16d628d82af5c",
      product: "62e7450e810df1f6e3096e0c",
    },
    {
      review:
        "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
      rating: 5,
      user: "62ecf2ed34e16d628d82af62",
      product: "62e7450e810df1f6e3096e0a",
    },
    {
      review:
        "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
      rating: 4,
      user: "62ecf2ed34e16d628d82af62",
      product: "62ecbc2d2bd12148f9781f1d",
    },
    {
      review:
        "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
      rating: 5,
      user: "62ecf2ed34e16d628d82af62",
      product: "62ecbc2d2bd12148f9781f1d",
    },
  ]);

  res.status(200).json({
    status:"success",
    data:data
  })
})

const deleteR=catchError(async(req,res,next)=>{
  await Review.deleteMany()

  res.status(200).json({
    data:"ochirildi"
  })
})

module.exports={getAllReview,addReview,deleteR}