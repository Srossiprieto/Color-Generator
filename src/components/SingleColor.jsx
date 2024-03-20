import { useState } from 'react'
import Copy from '../../public/copy.svg'

const SingleColor = ({ hexColor }) => {


  const [copy, setCopy] = useState(false)
  

  const handleCopy = (color) => () => {
    const colorNew = `#${color}`
    navigator.clipboard.writeText(colorNew)
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }


  return (
    <div className='single-card' style={{ backgroundColor : `#${hexColor}`}}>
        <div className="content">
            <p>
                {hexColor}
            </p>
            <button onClick={handleCopy(hexColor)}>
              <img src={Copy} alt="copy" />
            </button>
           {copy ? <p className='copy-alert'>Copied to clipboard</p> : null}
        </div>
      
    </div>
  )
}

export default SingleColor
