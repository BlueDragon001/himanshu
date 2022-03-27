import React,{useEffect} from "react";
import { Bounce } from "react-reveal";
import '../NoPage/NoPage.scss';





function NoPage(){
    const style = { margin:"1rem", display:"flex", flexDirection:"row",
     justifyContent:"center",alignItems:"center", fontSize:"20px", color:"#00FFA2"};
     const hStyle = {transform:"translateY( -100px )"};

     useEffect(() => {
         document.title = "Page not Found";
     })
    return(
        <Bounce>
            
            <section className='noPage' >
            <h1 style={hStyle}>Page Not Found</h1>

        </section>
        </Bounce>
        
    );
}

export default NoPage;