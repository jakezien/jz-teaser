import { useContext, useEffect, useState } from 'react';
import { CarouselContext } from 'pure-react-carousel';

export default function CarouselToggler(props) {
      const carouselContext = useContext(CarouselContext);
      const [touchEnabled, setTouchEnabled] = useState(carouselContext.state.touchEnabled);
      const [dragEnabled, setDragEnabled] = useState(carouselContext.state.dragEnabled);
      let shouldBeDraggable = true;

      let toggleCarousel = (newState) => {
            setTouchEnabled(newState);
            setDragEnabled(newState);
            console.log('newState', newState)
      }

      let handleResize = (e) => {
            if (innerWidth >= 1080 && dragEnabled) {
                  setTouchEnabled(false)
                  setDragEnabled(false)
                  console.log('false')
            }
            if (innerWidth < 1080 && !dragEnabled) {
                  setTouchEnabled(true)
                  setDragEnabled(true)
                  console.log('true')
            }
      }

      useEffect(() => {console.log(carouselContext.state.dragEnabled)})

      window.addEventListener('resize', handleResize)

      return null;
}