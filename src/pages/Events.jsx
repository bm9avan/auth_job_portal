import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

const Jobs = () => {
  const f = useSelector((s) => s.status);
  if (!f) {
    console.log(f);
    return <>login</>;
  }
  const [search, setSearch] = useState("");
  const [data, setData] = useState(useLoaderData());
  function searchHandler(e) {
    e.preventDefault();
    if (search.trim().length === 0) {
      return;
    }
    fetch(`https://nodejs-job-api-bm9avan.vercel.app/get/${search}`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }
  return (
    <div style={{ color: "black" }}>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Your Gateway to <code style={{ color: "green" }}>Opportunities</code>:
        Explore JOB PORTAL.
      </p>

      <div>
        <form
          className="search"
          onSubmit={searchHandler}
          style={{ flexDirection: "row", marginTop: "25px" }}
        >
          <input
            type="search"
            name="q"
            id="search"
            value={search}
            placeholder="Enter text to search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="job-list">
        {data.length === 0 ? (
          <p className="heading" style={{ fontSize: "35px" }}>
            Search not found!
          </p>
        ) : (
          data.map((job) => {
            return (
              <div key={job._id}>
                <div className="job-card">
                  <h2>{job.profile}</h2>
                  <p>{job.desc}</p>
                  <p>Experience: {job.exp} years</p>
                  <div className="techs">
                    {job.techs.map((tech, idx) => {
                      return <span key={job._id + idx}>{tech}</span>;
                    })}
                  </div>
                  <button
                    onClick={() => navigate("/apply")}
                    className="details-button"
                  >
                    Apply now
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Jobs;

export async function loader({ req, par }) {
  const res = await fetch(`https://nodejs-job-api-bm9avan.vercel.app/get`);
  return res.json();
}
