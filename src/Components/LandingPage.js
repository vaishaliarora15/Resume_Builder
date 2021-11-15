import { useTheme } from '@emotion/react'
import React from 'react'
import {useHistory} from "react-router-dom"

function LandingPage() {
    const history = useHistory();
    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={()=>{
                history.push("/templates")
            }}> go to contact form </button>
        </div>
    )
}

export default LandingPage
