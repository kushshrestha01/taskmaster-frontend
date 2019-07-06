import React from 'react';

function Description(props){
  let description = props.description || [];
  return(
    <section>
      <div>
        <span>Description: {description}</span>
      </div>
    </section> 
  )
};

export default Description;