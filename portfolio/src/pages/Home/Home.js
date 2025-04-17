
import homeBackground from "../../images/home-background2.jpg";
import './Home.css';

const Home=()=>{
    return(
        <>
       <section>
        <div className="home-container">
            <div className="home-content">
                <div className="home-background-image">
                    <img src={homeBackground} alt=""/>
                </div>
                
            </div>
        </div>
       </section>
        </>
    )

}
export default Home;
