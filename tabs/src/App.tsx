import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { IData } from './types'

const App: FC = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState<IData[]>([])
  const [value, setValue] = useState(0)

  const fetchItems = async () => {
    try {
      const {data} = await axios.get<IData[]>('https://course-api.com/react-tabs-project')
      setJobs(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  if(loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {company, duties, title, dates} = jobs[value]

  return (
    <div className="section">
      <div className="title">
        <h2>experience</h2>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return <button className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)} key={job.id}>
                {job.company}
              </button>
            })
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((item, index) => {
              return <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{item}</p>
              </div>
            })
          }
        </article>
      </div>
    </div>
  )
}

export default App
