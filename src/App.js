import React, { useState, useEffect } from "react";
import "./App.css";
import { getListData, getTabletData } from "./services";
import Layout from "./Layout/Layout";

function App() {
  const [listaData, setListData] = useState();
  const [selectedData, setSelectedData] = useState();
  const [details, setDetails] = useState();
  const [filteredDetails, setFilteredDetails] = useState();
  const [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await getListData();
        if (response) {
          setListData(response.data);
          setSelectedData(response.data[0].id);
          handleTableData(response.data[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    initialFetch();
  }, []);

  const handleTableClick = (selectedNum) => {
    const filterFlights = details.filter((item) => item.num === selectedNum);
    setFilteredDetails(filterFlights[0]);
    setSelectedRow(selectedNum)
  };

  useEffect(() => {
    const timeoutId = setInterval(() => handleTableData(selectedData), 60000);
    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  const handleTableData = async (id) => {
    try {
      const response = await getTabletData(id);
      if (response) {
        setDetails(response.data);
        setFilteredDetails(response.data? response.data[0]: '')
        setSelectedRow(response.data[0].num)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout
        listaData={listaData}
        selectedData={selectedData}
        details={details}
        selectedRow = {selectedRow}
        handleTableClick = {handleTableClick}
        filteredDetails = {filteredDetails}
        setSelectedData={setSelectedData}
        handleTableData={handleTableData}
      />
    </>
  );
}

export default App;
