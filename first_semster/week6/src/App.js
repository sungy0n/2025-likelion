import React, { useEffect, useState } from "react";
import axios from "axios"
import '../src/style.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
  console.log("API Response:", data);
}, [data]);


  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(
        "http://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelterList",
        {
          params: {
            serviceKey: process.env.REACT_APP_API_KEY,
            pageNo: 1,
            numOfRows: 10,
            type: "json"
          }
        }
      );

      setData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div className="App">
      <h1>지진해일 긴급대피장소 목록</h1>
      <ul>
        {data.TsunamiShelter[1].row.map((item) => (
          <li key={item.id}>
            <h2>{item.shel_nm}</h2>
            <p>주소: {item.address}</p>
            <p>수용인원: {item.shel_av}</p>
            <p>해발고도: {item.height}</p>
            <p>위도: {item.lat}, 경도: {item.lon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

