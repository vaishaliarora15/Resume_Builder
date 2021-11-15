import React from 'react'
import {useEffect,useState} from "react";
import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import {connect} from "react-redux"
import SamplePreview from "./SamplePreview"
import Preview from "./Preview"
import { useHistory } from 'react-router';


function Education(props) {
  const history=useHistory();
    const[EducationHistory,setEducationHistory]=useState(props.EducationSection);

    console.log(props);


const onChange = (e,id) => {
    let key = e.target.name;
    let val = e.target.value;
    let newEducationHistoryArr=[...EducationHistory.EducationHistories];
    newEducationHistoryArr[id]={...newEducationHistoryArr[id],[key]:val}
    // let newEducationHistoryObj={...EducationHistory}
    // newEducationHistoryObj[EducationHistories]:newEducationHistoryArr;
    setEducationHistory({...EducationHistory,EducationHistories: newEducationHistoryArr} );
    // setEducationHistory({ ...EducationHistory,[key]:[val]});
    props.updateKey(key, val,id);
  };
  const getValue = (key,id) => {
    // let id=1;
    // console.log(id,key,EducationHistory.EducationHistories);
    // return "abc";
    // return props.EducationSection.EducationHistories[id][key];
    return EducationHistory.EducationHistories[id][key];
  };
  let EducationState = {
    CLG: "",
    DGRE: "",
    GRYR: "",
    GRDT: "",
    GRCG: "",
    CBOARD: "",
    CCITY: "",
  };

  const  addEducation=async()=>{
    console.log("button");
    setEducationHistory({...EducationHistory,EducationHistories:[...EducationHistory.EducationHistories,{id:EducationHistory.EducationHistories.length,...EducationState}]});
    await props.addEducation();
  }
    let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };
    return (
        <div>
            <h1>this is Education Section </h1>
            <button onClick={()=>history.push("/workhistory")}>go to Worksection</button>
            <button onClick={()=>history.push("/contact")}>go back</button>
<div  className ="educationPage "style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"flex-start" ,width:"100%"}}>
  
  <div className="EducationHistories" style={{      
    display: "flex",
          flexDirection: "column",
          width:"35%",
          // justifyContent: "sp",
          backgroundColor:"beige",
          alignItems: "flex-start",
          height: "50%",}}>
{props.EducationSection.EducationHistories.map(education=>
(

  <div key={education.id}
  style={{
    display: "flex",
    flexDirection: "column",
    width:"100%",
    border: "0.5px solid #e3d4c2",
    // justifyContent: "sp",
    alignItems: "flex-start",
    height: "50%",


    
  }}
  className="EducationHtmlForm"
>
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      margin: "0 0 0 1rem",
      alignItems: "flex-start",
      width:"90%"
    }}
    className="collegeName"
  >
    <label style={labelCss} htmlFor="College">
      College Name :
    </label>
    <TextField
      id="outlined-basic"
      name={fieldCd.CollegeName}
      value={getValue(fieldCd.CollegeName,education.id)}
      onChange={(e) => onChange(e,education.id)}
      sx={{
        height: "5ch",
        width: "95%",
        size: "small",
      }}
      size="small"
      variant="outlined"
    />
  </div>
  <div
    style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }}
    className="DegreeAndCGPA"
  >
       <label style={labelCss} htmlFor="CollegeInfo">
      College Info :
    </label>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="DegreeAndCGPA">
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.Degree,education.id)}
        sx={{
          width: "48%",
          margin: "1px 6% 0 0",
        }}
        name={fieldCd.Degree}
        onChange={(e) => onChange(e,education.id)}
        label="Degree"
        variant="outlined"
      />
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.GraduationCGPA,education.id)}
        name={fieldCd.GraduationCGPA}
        onChange={(e) => onChange(e,education.id)}
        sx={{
          width: "48%",
          // margin:"0 1rem 0 0"
        }}
        label="GraduationCGPA"
        variant="outlined"
      />
    </div>
  </div>
  <div
    style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }}
    className="graduationYearAndDate"
  >

    <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.CollegeAdmission,education.id)}
        sx={{
          width: "48%",
          margin: "1px 6% 0 0",
        }}
        name={fieldCd.CollegeAdmission}
        onChange={(e) => onChange(e,education.id)}
        label="Admission year"
        variant="outlined"
      />
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.GraduationDate,education.id)}
        name={fieldCd.GraduationDate}
        onChange={(e) => onChange(e,education.id)}
        sx={{
          width: "48%",
          // margin:"0 1rem 0 0"
        }}
        label="GraduationDate"
        variant="outlined"
      />
    </div>
  </div>
  <div
    style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }}
    className="CollegeCityAndCollegeBoard"
  >

    <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.CollegeCity,education.id)}
        sx={{
          width: "48%",
          margin: "1px 6% 0 0",
        }}
        name={fieldCd.CollegeCity}
        onChange={(e) => onChange(e,education.id)}
        label="CollegeCity"
        variant="outlined"
      />
      <TextField
        size="small"
        id="outlined-basic"
        value={getValue(fieldCd.CollegeBoard,education.id)}
        name={fieldCd.CollegeBoard}
        onChange={(e) => onChange(e,education.id)}
        sx={{
          width: "48%",
          // margin:"0 1rem 0 0"
        }}
        label="CollegeBoard"
        variant="outlined"
      />
    </div>
  </div>

    </div>
))}
<button onClick={()=>addEducation()}>addEducation</button>
</div>
            {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "70vh",
          width:"43vw"
        }}
        className="EducationHtmlForm"
      >
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 0 1rem",
            alignItems: "flex-start",
            width:"41vw"
          }}
          className="collegeName"
        >
          <label style={labelCss} htmlFor="College">
            College Name :
          </label>
          <TextField
            id="outlined-basic"
            name={fieldCd.CollegeName}
            value={getValue(fieldCd.CollegeName)}
            onChange={(e) => onChange(e)}
            sx={{
              height: "5ch",
              width: "92%",
              size: "small",
            }}
            size="small"
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3% 0 3% 3%",
            alignItems: "flex-start",
          }}
          className="DegreeAndCGPA"
        >
             <label style={labelCss} htmlFor="CollegeInfo">
            College Info :
          </label>
          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="DegreeAndCGPA">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.Degree)}
              sx={{
                width: "19vw",
                margin: "1px 1rem 0 0",
              }}
              name={fieldCd.Degree}
              onChange={(e) => onChange(e)}
              label="Degree"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationCGPA)}
              name={fieldCd.GraduationCGPA}
              onChange={(e) => onChange(e)}
              sx={{
                width: "48%",
                // margin:"0 1rem 0 0"
              }}
              label="GraduationCGPA"
              variant="outlined"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3% 0 3% 3%",
            alignItems: "flex-start",
          }}
          className="graduationYearAndDate"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationYear)}
              sx={{
                width: "19vw",
                margin: "0 1rem 0 0",
              }}
              name={fieldCd.GraduationYear}
              onChange={(e) => onChange(e)}
              label="GraduationYear"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationDate)}
              name={fieldCd.GraduationDate}
              onChange={(e) => onChange(e)}
              sx={{
                width: "48%",
                // margin:"0 1rem 0 0"
              }}
              label="GraduationDate"
              variant="outlined"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3% 0 3% 3%",
            alignItems: "flex-start",
          }}
          className="CollegeCityAndCollegeBoard"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.CollegeCity)}
              sx={{
                width: "19vw",
                margin: "0 1rem 0 0",
              }}
              name={fieldCd.CollegeCity}
              onChange={(e) => onChange(e)}
              label="CollegeCity"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.CollegeBoard)}
              name={fieldCd.CollegeBoard}
              onChange={(e) => onChange(e)}
              sx={{
                width: "48%",
                // margin:"0 1rem 0 0"
              }}
              label="CollegeBoard"
              variant="outlined"
            />
          </div>
        </div>

          </div> */}
          {/* <SamplePreview ContactSection={props.ContactSection} EducationSection={props.EducationSection}></SamplePreview> */}
          <Preview ContactSection={props.ContactSection} DocumentReducer={props.DocumentReducer} WorkSection={props.WorkSection} EducationSection={props.EducationSection}></Preview>

          </div>
        </div>
    )
}
const mapStateToProps=(store)=>{
    return (store);
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateKey:(key,val,id)=>{
            console.log("dispatch",key,val);
            return dispatch({type:"UPDATEEDUCATIONKEY",payload:{key:key,val:val,id:id}})
          },
          addEducation:()=>dispatch({type:"ADDEDUCATION"}),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( Education)
