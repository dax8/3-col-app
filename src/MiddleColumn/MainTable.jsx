import React from "react";
import { Table } from "semantic-ui-react";

const MainTable = ({ details, handleTableClick, selectedRow }) => {
  return (
    <>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Flight number</Table.HeaderCell>
            <Table.HeaderCell>Origin</Table.HeaderCell>
            <Table.HeaderCell>Origin date</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Destination date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {details &&
            details.map(({ num, to, from, to_date, from_date }) => {
              return (
                <Table.Row key={num} onClick={() => handleTableClick(num)} positive = {selectedRow === num ? true: false}>
                  <Table.Cell>{num}</Table.Cell>
                  <Table.Cell>{from}</Table.Cell>
                  <Table.Cell>{from_date}</Table.Cell>
                  <Table.Cell>{to}</Table.Cell>
                  <Table.Cell>{to_date}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </>
  );
};

export default MainTable;
