import React, { Component } from 'react';
import Header from '../partials/Header';
import fetchData from '../api'
import Footer from '../partials/Footer'

export default class DetailedView extends Component {
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
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
              <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-teal-500 to-blue-500">ChiVaxTrack</span> Detailed View</h1>
              <p className="text-xs text-gray-600 mb-2" data-aos="zoom-y-out" data-aos-delay="150">Data derived from <a className="underline" href="https://data.cityofchicago.org/Health-Human-Services/COVID-19-Daily-Vaccinations-Chicago-Residents/2vhs-cf6b" >the City of Chicago</a>.</p>
              <div className="text-xs text-gray-600 mb-4" data-aos="zoom-y-out" data-aos="zoom-y-out" data-aos-delay="300"><p>Last Updated {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="w-full max-w-5xl">
            <div className="-mx-2 md:flex">
            <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4" data-aos="zoom-y-out" data-aos-delay="400">
          <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
              <h4 className="text-sm uppercase text-gray-500 leading-tight">Total Vaccinations (Partial and Full)</h4>
              <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{data.total_doses_cumulative}</h3>
              <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4" data-aos="zoom-y-out" data-aos-delay="400">
          <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
              <h4 className="text-sm uppercase text-gray-500 leading-tight">Partially Vaccinated Today</h4>
              <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{data._1st_dose_daily}</h3>
              <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
            </div>
          </div>
        </div>
      </div>
            <div className="w-full md:w-1/4 px-2">
            <div className="rounded-lg shadow-sm mb-4" data-aos="zoom-y-out" data-aos-delay="350">
            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
              <h4 className="text-sm uppercase text-gray-500 leading-tight">Partially Vaccinated Total</h4>
              <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{data._1st_dose_cumulative}</h3>
              <p className="text-xs text-green-500 leading-tight">▲ 57.1%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4" data-aos="zoom-y-out" data-aos-delay="400">
          <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
              <h4 className="text-sm uppercase text-gray-500 leading-tight">Fully Vaccinated Today</h4>
              <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{data.vaccine_series_completed_daily}</h3>
              <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-2">
        <div className="rounded-lg shadow-sm mb-4" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
            <div className="px-3 pt-8 pb-10 text-center relative z-10">
              <h4 className="text-sm uppercase text-gray-500 leading-tight">Fully Vaccinated Total</h4>
              <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{data.vaccine_series_completed_cumulative}</h3>
              <p className="text-xs text-green-500 leading-tight">▲ 8.2%</p>
            </div>
                </div>
                   </div>
                     </div>
                  </div>
               </div>
             </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}}
