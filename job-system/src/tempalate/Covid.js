import React, { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [datac, setData] = useState([]);
  useEffect(() => {
    //   let datamin = async () => {
    //     let db = await axios.get(
    //       "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    //     );
    //     console.log(db);
    //   };
    //   datamin();
    //   // (async () => {
    //   //   let db = await axios.get(
    //   //     "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    //   //   );
    //   //   console.log(db);
    //   // })();
    // }, []);
    axios
      .get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">Default Table</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Confirmed</th>
              <th scope="col">Country</th>
              <th scope="col">Position</th>
              <th scope="col">Age</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {datac &&
              datac.length > 0 &&
              datac.map((item) => {
                return (
                  <tr key={item.ID}>
                    <td>{item.Confirmed}</td>
                    <td>{item.Country}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Covid;
