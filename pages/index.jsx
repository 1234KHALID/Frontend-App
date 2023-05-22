import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuthenticatedFetch } from "../hooks";
export default function () {
  const Navigate = useNavigate();
  const fetchDataAPI = useAuthenticatedFetch();
  const fetchData = () => {
    fetchDataAPI('/api/setting/data', {
      method: "GET",
    }).then((resp) => resp.json())
      .then((result) => {
        if (result.success) {
          const { data: { step_first, step_two } } = result
          if (step_first === 1 || step_two === 2) {
            // Navigate("/dashboard");
            Navigate("/basicsetting");
          } else {
            Navigate("/basicsetting");
          }
        } else {
          Navigate("/basicsetting");
        }
      }).catch(() => {
        Navigate("/basicsetting");
      }
      );
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (<></>)
}
