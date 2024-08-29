
import Featuredproduct from "./Featuredproduct";
import Inspiredproduct from "./Inspiredproduct";
import Latestblog from "./Latestblog";
import Mencollection from "./Mencollection";
import Newproduct from "./Newproduct";

function Mid() {
    return (

        <>
            <div>
                <Mencollection/>
                
                <Featuredproduct/>


                <Newproduct/>
               
                <Inspiredproduct/>
                
                <Latestblog/>
            </div>

        </>
    )
}

export default Mid;