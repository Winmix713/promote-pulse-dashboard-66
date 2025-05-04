
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to dashboard overview as the default page
  useEffect(() => {
    navigate("/dashboard/overview");
  }, [navigate]);
  
  return null; // This component will just redirect
};

export default Index;
