import React from 'react'

function Loader (){
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="flex justify-center items-center h-screen">
			    <i className="fas text-5xl text-red-600 animate-spin fa-spinner"></i>
        </div>
		</div>
	);
}

export default Loader