import React from 'react';
import fetchData from '../api'

export default class HeroHome extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }

  render() {
    const {data} = this.state;
  return (
    <section className="relative">

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stopColor="#74ebd5" offset="10%" />
              <stop stopColor="#ACB6E5" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="16" data-aos="zoom-x-out" data-aos-delay="250"/>
            <circle cx="155" cy="443" r="16" data-aos="zoom-x-out" data-aos-delay="750"/>
            <circle cx="275" cy="113" r="16" data-aos="zoom-x-out" data-aos-delay="1250"/>
            <circle cx="961" cy="277" r="16" data-aos="zoom-x-out" data-aos-delay="1750"/>
            <circle cx="661" cy="547" r="16" data-aos="zoom-x-out" data-aos-delay="2250"/>
            <circle cx="1300" cy="447" r="16" data-aos="zoom-x-out" data-aos-delay="2750"/>
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:py-24 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">There are currently <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-500 to-blue-500">{data.vaccine_series_completed_cumulative}</span> fully vaccined Chicagoans.</h1>
            <h1 className="text-3xl md:text-3xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out" data-aos-delay="200">With an additional <span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-500 to-blue-500">{data._1st_dose_cumulative}</span> partially vaccined Chicagoans.</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xs text-gray-600 mb-2" data-aos="zoom-y-out" data-aos-delay="150">Data derived from <a className="underline" href="https://data.cityofchicago.org/Health-Human-Services/COVID-19-Daily-Vaccinations-Chicago-Residents/2vhs-cf6b" >the City of Chicago</a>.</p>
              <div className="text-xs text-gray-600 mb-4" data-aos="zoom-y-out" data-aos="zoom-y-out" data-aos-delay="300"><p>Last Updated {new Date().toLocaleTimeString()}</p>
              </div>
              <a href="https://www.zocdoc.com/vaccine" className="btn-sm bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-teal-500 to-blue-500 ml-3">
                  <span>Want to join the counter? Schedule a vaccine here.</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </a>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}}