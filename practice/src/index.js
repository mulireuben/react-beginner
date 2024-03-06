// import React from "react";
// import ReactDOM from "react-dom";

// const page=(
//     <div>
//             <img src="/assets/react-logo.png" alt="" width="40"></img>
//         <h1>THIS IS MY HEADING</h1>
//         <p>simple itroduction</p>


//         <ol>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//         </ol>
//     </div>

// )


// ReactDOM.render(page,document.getElementById("root"))


//when i want to write a function instead of declaring a variable:
//to call this function we can name it with a capital letter and call it inside</>

// import React from "react";
// import ReactDOM from "react-dom";

// function Page(){
//     return(
//     <div>
//             <img src="/assets/react-logo.png" alt="" width="40"></img>
//         <h1>THIS IS MY HEADING</h1>
//         <p>simple itroduction</p>


//         <ol>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//             <li>This is a simple thing to learn and understand</li>
//         </ol>
//     </div>)

// }
// ReactDOM.render(<Page /> ,document.getElementById("root"))

//another practice
// import React from "react"
// import ReactDOM from "react-dom"

// function Temporarything(){
//     return(
//         <div>
//             <img src="/assets/react-logo.png" width="40" alt=""></img>
//             <h1>this are the simple explanations aabout the react</h1>
//             <ol>
//                 <li>i am also willing to learn the react</li>
//                 <li>i am also willing to learn the react</li>
//                 <li>i am also willing to learn the react</li>
//                 <li>i am also willing to learn the react</li>
//                 <li>i am also willing to learn the react</li>
//             </ol>
//         </div>

//     )
// }
// ReactDOM.render(<Temporarything/>,document.getElementById("root"))


//i want now to try adding the header and the footer to my simple page i created.
//the header should contain the image logo in my page 
//then a simple heading 
//then the body with some ordered list
//and finnaly the footer

import React from"react";
import ReactDOM from "react-dom"

function Anotherpage(){
    return(
        <div>
            <header><nav>
                <img src="/assets/react-logo.png" width="40px" alt=""/>
                </nav>
            </header>
            <h1>THIS IS AN INTRODUCTION TO MY SIMPLE PAGE</h1>
            <p>welcome all</p>
            <ol>
                <li>am willing to learn </li>
                <li>am willing to enjoy </li>
                <li>am willing to be busy </li>
                <li>am willing to learn </li>
                <li>am willing to learn </li>
            </ol>


            
            <footer>



                <small>@i am a proficient ,all rights reserved</small>
            </footer>


        </div>
    )

}
ReactDOM.render(<Anotherpage/>,document.getElementById("root"))