import React from 'react'

const Pagination = ({data, pageHandler}) => {
    let pagNumbers = [];
    for(let i = 1; i< Math.ceil(data.length/10)+1; i++){
        pagNumbers.push(i);
    }
  return (
    <div>
        <center>
            {
                pagNumbers.map(page => <div className='pagebutton' onClick={()=>pageHandler(page)}>{page}</div>)
            }
        </center>
    </div>
  )
}

export default Pagination
