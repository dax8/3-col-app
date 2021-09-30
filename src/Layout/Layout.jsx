import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import MainList from "../LeftColumn/MainList";
import MainTable from "../MiddleColumn/MainTable";
import RightColumn from "../RightColumn/RightColumn";
import styles from "./Layout.module.css";

const Layout = ({
  listaData,
  selectedData,
  setSelectedData,
  handleTableData,
  details,
  filteredDetails,
  handleTableClick,
  selectedRow
}) => {
  return (
    <>
      <Wrapper
        content={
          <>
            <div className={styles.layoutStyleMain}>
              <div className={styles.layoutStyleList}>
                <MainList
                  listaData={listaData}
                  handleTableData={handleTableData}
                  setSelectedData={setSelectedData}
                  selectedData={selectedData}
                />
              </div>
              <div className={styles.layoutStyleTable}>
                <MainTable
                  details={details}
                  handleTableClick={handleTableClick}
                  selectedRow={selectedRow}
                />
              </div>
              <div className={styles.layoutStyleDetails}>
                <RightColumn filteredDetails={filteredDetails} />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Layout;
