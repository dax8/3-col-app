import React from "react";
import { List } from "semantic-ui-react";

const RightColumn = ({ filteredDetails }) => {
  const formatTime = (time) => {
    var hours = Math.trunc(time/60);
    var minutes = time % 60;
    return hours +'h'+ minutes +'m';
  };
  return (
    <>
    {filteredDetails? 
    <List horizontal>
      <br />
      <List.Item>
        <List.Content verticalAlign="middle">
            Plane number: {filteredDetails.num}
          </List.Content>
        </List.Item>
        <br />
      <List.Item>
        <List.Content verticalAlign="middle">
          Duration: {formatTime(filteredDetails.duration)}
        </List.Content>
      </List.Item>
      <br />
      <List.Item>
        <List.Content verticalAlign="middle">
          Origin gate: {filteredDetails.from_gate}
        </List.Content>
      </List.Item>
      <br />
      <List.Item>
        <List.Content verticalAlign="middle">
          Destination gate: {filteredDetails.to_gate}
        </List.Content>
      </List.Item>
    </List>
    : ''}
    </>
  );
};

export default RightColumn;
