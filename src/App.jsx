import { useState } from 'react'
import './app.css'
import data from "./data.json"
import Remove from "./assets/icon-remove.svg"




export default function App() {
  const [jobs, setJobs]=useState(data);
  const [filterArr, setFilterArr] = useState([]);

  console.log(filterArr);

 const chooseHandler = (obj) => {
  setFilterArr((state) => {
    return [...state, obj];
  });
 }

  return (
    <div className="main">
      {filterArr.length > 0 ?(<div className="filters">
        <div className="choice-btns"></div>
        <button className="clear-btn">Clear</button>
      </div>): null}
      <section className="jobs" style={{marginTop: filterArr.length > 0 ? "40px": "232px"}}>
        {jobs.map((job)=>{
          return <div className='job' key={job.id}>
            <div className="job-left">
              <img src={job.logo} alt="" />
              <div>
                <div className="info-header">
                  <div className="company-title">{job.company}</div>
                  {job.new ? <div className="new-job">new</div>: null}
                  {job.featured ?<div className="featured-job">FEATURED</div>: null}
                </div>
                <div className="job-position">{job.position}</div>
                <div className="info-footer">
                  <h3 className="extra">{job.postedAt}</h3>
                  <span className="circle"></span>
                  <h3 className="extra">{job.contract}</h3>
                  <span className="circle"></span>
                  <h3 className="extra">{job.location}</h3>
                </div>
              </div>
            </div>
            <div className="job-right">
              <button className="prop-btn"  onClick={() => chooseHandler({
                property: "role",
                value: job.role,
              })}>{job.role}</button>
              <button className="prop-btn"onClick={() => chooseHandler({
                property: "level",
                value: job.level,
              })}>{job.level}</button>
              {job.tools.map((tool)=>{
                return <button className="prop-btn" key={tool} onClick={() => chooseHandler({
                  property: "tool",
                  value: job.tool,
                })}>{tool}</button>
              })}
              {job.languages.map((language)=> {
                return <button className="prop-btn" key={language} onClick={() => chooseHandler({
                  property: "language",
                  value: job.language,
                })}>{language}</button>
              })}
            </div>
          </div>

        })}
      </section>
    </div>
   
  );
}

