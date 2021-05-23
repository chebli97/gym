import React from 'react'
import Gymcard from '../Components/Gymcard'


const Home = ({Gymobj}) => {
    return (
        <div className='home'>
            {
                Gymobj.map((user,i) => {
                    return(
                         
                        <Gymcard
                        key={i}
                        id={Gymobj[i].id}
                        title={Gymobj[i].title}
                        rate={Gymobj[i].rate}
                        img_src={Gymobj[i].img_src}
                        />
                       
                    )
                })


        }
        </div>
    )
}

export default Home
