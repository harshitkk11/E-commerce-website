import Product_struc from "./Product_struc";
import Ads from "./Ads";
import "../assets/css/Home.css"

function Home() {

    // const Data = async () => {
    //     const url = "../data/fashion.csvv";
    //     setLoading(true )
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData.articles);
    //     setLoading(false);
    //     settotalResults(parsedData.totalResults);
    // }
    return (
        <div className="home">
            <Ads/>
            <div className="products-container">
                <Product_struc/>
            </div>
        </div>      
    )
}
export default Home;