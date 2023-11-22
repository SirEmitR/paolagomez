import { useEffect, useRef, useState } from 'react'

function useObserver(options){
  const [entries, setEntries] = useState([])
  const [elements, setElements] = useState([])
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((observerEntries) =>{
        setEntries(observerEntries)
      }, options)
    const currentObserver = observer.current
    currentObserver.disconnect()
    if(elements.length > 0){
        elements.forEach(element =>currentObserver.observe(element))
    }
    
    return function cleanUp(){
        if(currentObserver){
            currentObserver.disconnect()
        }
    }
  }, [elements, observer,options])

  return [observer.current, setElements, entries]
}

export default useObserver