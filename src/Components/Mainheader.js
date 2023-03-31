import { Button } from "antd";
import React from "react";

function MainHeader() {

    const headerName =[{letter:"Q",color:'blue'},
    {letter:"u",color:'red'},
    {letter:"i",color:'blue'},
    {letter:"z",color:'red'},
    {letter:"m",color:'blue'},
    {letter:"a",color:'red'},
    {letter:"k",color:'blue'},
    {letter:"e",color:'red'},
    {letter:"r",color:'blue'}   
]

    return (
        <>
          <div className="bg-slate-200 w-full  ">
        <div class="shadow-2xl border-solid w-w95  max-sm:m-0 md:m-auto">
           <div class="flex justify-center border">
                
                    <div class="flex flex-row">
                        {headerName.map((item)=>{
                            return(                                
                                <h2 key={item.letter} style={{color:item.color,fontSize:35}}>{item.letter}</h2>
                            )
                        })}
                        
                    </div>                  
                    </div>
           </div>
           </div>
        </>
    );
}

export default MainHeader;
