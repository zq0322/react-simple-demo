import React from 'react'
import ReactSwipe from 'react-swipe'
import './index.css'

class Carousel extends React.Component{
    constructor(){
        super()
        this.state = {
            posIndex:0
        }
    }
    render(){
        let {carouselList} = this.props
        return <div className="carousel">
            {
                carouselList.length? <ReactSwipe swipeOptions={{continuous:true}} >
                    {
                        carouselList.map(item=>{
                            return <div key={item.id}>
                                <img src={item.picUrl} alt="" />
                            </div>
                        })
                    }
                </ReactSwipe> : null
            }
        </div>
    }
}
export default Carousel