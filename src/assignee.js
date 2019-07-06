import React from 'react';

function Assignee(props){
  let assignee = props.assignee || [];
  return(
    <section>
      <div>
        <span>Assigned to: {assignee}</span>
      </div>
    </section> 
  )
};

export default Assignee;