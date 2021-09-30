import React from "react";
import { List, Header } from "semantic-ui-react";

const MainList = ({ listaData, handleTableData, setSelectedData, selectedData }) => {
  const handleClick = (id) => {
    setSelectedData(id);
    handleTableData(id);
  };

  return (
    <>
      <List divided selection verticalAlign="middle" size="huge">
      <Header style={{fontSize: 25, background: '#00FFFF', padding: '2rem'}}> Workers </Header>
        {listaData &&
          listaData.map(({ name, id }) => {
            return (
              <List.Item
                key={id}
                active={id === selectedData ? true : false}
                onClick={() => handleClick(id)}
              >
                <List.Content floated="left">{name}</List.Content>
              </List.Item>
            );
          })}
      </List>
    </>
  );
};

export default MainList;
