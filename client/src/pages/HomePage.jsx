import Product_struc from "../components/Product_struc";
import Ads from "../components/Ads";
import "../assets/css/HomePage.css"

function Home() {

    fetch('https://raw.githubusercontent.com/YBI-Foundation/Dataset/main/Airline%20Delay.csv')
        .then(response => response.text())
        .then(data => {
            // Log CSV data to the console
            console.log(data);

            // // Alternatively, you can parse and log the data as an array
            // const rows = data.split('\n').map(row => row.split(','));
            // console.log(rows);
        })
        .catch(error => console.error('Error fetching CSV:', error));



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