import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Job from "../components/Job";

import React from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        setIsLoading(false);
        setJobs(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const slicedJobs = jobs.slice(0, 8);
  console.log(slicedJobs);

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100dvh - 160px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {isLoading && <p>Loading...</p>}
        {!isLoading && jobs.length === 0 && <p>API not working...</p>}
        {slicedJobs.map((job) => (
          <Job key={job.id} image={job.url} title={job.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
