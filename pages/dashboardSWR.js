import React from 'react'
import useSWR from 'swr';

const fetcher = async() => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();

    return data;
}

function DashboardSWR() {
  const {data, error} =  useSWR('dashboard' , fetcher);

  if(error) return 'An error has occured'

  if(!data) return 'loading'

  return (
    <div>
      <h1>dashboard</h1>
      <h2>{data.posts}</h2>
    </div>);
}

export default DashboardSWR