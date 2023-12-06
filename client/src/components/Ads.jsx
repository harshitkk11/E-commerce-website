import "../assets/css/Ads.css"
const Ads = () =>{
    let image = document.getElementById("image");
    image = [
        'http://assets.myntassets.com/v1/images/style/properties/49f884ddf4420d869ad143857d3bc33d_images.jpg',
        'http://assets.myntassets.com/v1/images/style/properties/0707b75d2d44e9cec9d27c944294ddbe_images.jpg',
        'http://assets.myntassets.com/v1/images/style/properties/647838a2e988ab55b76c9aa9ddd15ad7_images.jpg'
    ]
    return (
          <img src="http://assets.myntassets.com/v1/images/style/properties/647838a2e988ab55b76c9aa9ddd15ad7_images.jpg" id="image"/>
    )
}
export default Ads;