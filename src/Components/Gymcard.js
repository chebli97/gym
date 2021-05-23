import React from 'react'

const Gymcard = (props) => {
    return (
        
              <div className='grow shadow-5 ma3 dib pa2 bw2'>
            <div className=''>
              
              <h1 className="tc ">{props.title}</h1>
              <h1 className="tc">{props.rate}</h1>
                <img src={`images/${props.id}.jpg`} width='300px' />
            </div>  
                </div>
    )
}

export default Gymcard
