import React from 'react'


function Review({data}) {
  return (
   <div>
        {data.map((item)=>(
                    <div>
                         <div>{item.name}</div>
                        <p>{item.date}</p>
                        <p>{item.comments}</p>
                    </div>
                    ))}
    </div>
       
  )
}

export default Review