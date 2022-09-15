import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(true);
    }

    fetchData();

  }, []);

  if(!isLoading) {
    return <h2>loading...</h2>
  }

  return (
  <div>
    <h1>dashboard</h1>
    <h2>{dashboardData.posts}</h2>
  </div>);
}

export default Dashboard;
