import React,{useState} from 'react'

const Calculator = () => {
    const [val, setVal] = useState("")

    const backspace=()=>{
        try {
            setVal(val.slice(0,-1))
        } catch (err) {
            console.log(err)
        }
    }

    const calculate=()=>{
        try {
            setVal(eval(val));
        } catch (error) {
            setVal("Error")
            
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="display-6 fw-bolder text-center text-primary">Calculator</div>
                        <hr />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card text-white border-primary mb-3" >
                                <div className="card-body text-primary">
                                    <input type="text" className="form-control form-control-lg mb-4
                                     text-center bg-light fs-4 text-primary shadow" value={val}/>
                                     <div className="row m-1">
                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="1"
                                              onClick={(e)=>setVal(val + e.target.value)}>1</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="2"
                                              onClick={(e)=>setVal(val + e.target.value)}>2</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="3"
                                              onClick={(e)=>setVal(val + e.target.value)}>3</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="C"
                                              onClick={()=> backspace()}>C</button>
                                         </div>
                                     </div>


                                     <div className="row m-1">
                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="4"
                                              onClick={(e)=>setVal(val + e.target.value)}>4</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="5"
                                              onClick={(e)=>setVal(val + e.target.value)}>5</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="6"
                                              onClick={(e)=>setVal(val + e.target.value)}>6</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow  p-4 border-primary" value="+"
                                              onClick={(e)=>setVal(val + e.target.value)}>+</button>
                                         </div>
                                     </div>


                                     <div className="row m-1">
                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="7"
                                              onClick={(e)=>setVal(val + e.target.value)}>7</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="8"
                                              onClick={(e)=>setVal(val + e.target.value)}>8</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="9"
                                              onClick={(e)=>setVal(val + e.target.value)}>9</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="*"
                                              onClick={(e)=>setVal(val + e.target.value)}>X</button>
                                         </div>
                                     </div>


                            
                                     <div className="row m-1">
                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary text-bold" value="."
                                              onClick={(e)=>setVal(val + e.target.value)}>.</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="0"
                                              onClick={(e)=>setVal(val + e.target.value)}>0</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="="
                                              onClick={(e)=>calculate()}>=</button>
                                         </div>

                                         <div className="col-3">
                                             <button className="btn btn-light text-primary shadow p-4 border-primary" value="/"
                                              onClick={(e)=>setVal(val + e.target.value)}>/</button>
                                         </div>
                                     </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calculator
