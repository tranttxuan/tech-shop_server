const cloudinary = require('cloudinary');

//config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.upload = (req, res) => {
 cloudinary.uploader.upload(req.body.image, {
     public_id:`${Date.now}`,
     resource_type:'auto', //jpeg, png
 })
 .then(result => res.json({public_id:result.public_id, url:result.secure_url}))
 .catch(err => res.json({message:err}))
};

exports.remove = (req, res) => {
    const image_id = req.body.public_id;
    cloudinary.uploader.destroy(image_id)
    .then(result => res.status(200).json(result.result))
    .catch(err => res.json({success:false, err}))
};