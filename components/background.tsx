import React from 'react'

const Background = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='fixed star-bg inset-y-0 w-full h-full bg-no-repeat bg-gradient-cover' style={{ zIndex: -1 }}>
            {items.map((index) => (
                <span key={index} className='star absolute left-2/4 rounded-full bg-white'></span>
            ))}
        </div>
    )
}
export default Background;