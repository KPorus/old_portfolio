import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Component/Loading";
import Details from "./Details";
const Project = () => {
  const {
    isLoading,
    refetch,
    data: project = [],
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await fetch(`https://protfolio-server-kohl.vercel.app/projects`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2  gap-14'>
      {project.map((items) => (
        <Details items={items}></Details>
      ))}
    </div>
  );
};

export default Project;
