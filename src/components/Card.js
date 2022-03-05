import React from 'react'
const Card = ({ title, image, year }) => {
    return (
        <>

            <div className="card-body mx-4 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={image ? image : "http://via.placeholder.com/640x360"} alt="..." />
                <div className="p-5">
                    <span className="mb-2 tracking-tight text-gray-900 dark:text-white">{title}</span>
                </div>
            </div>

        </>
    )
}

export default Card