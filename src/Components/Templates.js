import React from 'react'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from "react-router-dom" 

function Templates(props) {
    const history=useHistory();
    console.log(props)

    function handleSelect(e){
        console.log("clicked");
console.log(e.target.name);
if(props.DocumentReducer.id==null){
    let uuid=uuidv4();
    // console.log(uuid);
    props.setSkin(uuid,e.target.name);
}else{
    props.updateSkin(e.target.name);
}
    }
    return (
        <div>
            <button name="nothing" onClick={()=>history.push("/contact")}>next</button>
            <button name="nothing" onClick={()=>history.push("/")}>back</button>
            <button name="1" onClick={(e)=>handleSelect(e)}>template1</button>
            <button name="2" onClick={(e)=>handleSelect(e)}>template2</button>
            <button name="3" onClick={(e)=>handleSelect(e)}>template3</button>
            <button name="4" onClick={(e)=>handleSelect(e)}>template4</button>
            <button name="5" onClick={(e)=>handleSelect(e)}>template5</button>
            <button name="6" onClick={(e)=>handleSelect(e)}>template6</button>
        </div>
    )
}

const mapStateToProps=(store)=>{return store}
const mapDispatchToProps=(dispatch)=>{
    return {
        setSkin:(id,skinCode)=>{
            console.log("setSkin");
            return dispatch({type:"SET_SKIN",payload:{id:id,skinCode:skinCode}})
        },
        updateSkin:(skinCode)=>{
            console.log("updateSkin");
            return dispatch({type:"UPDATE_SKIN",payload:{skinCode:skinCode}})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( Templates)
