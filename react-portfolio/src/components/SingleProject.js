import React from 'react'

const SingleProject = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.projectImage})`}} className="shadow-lg shadow-[#0e1520] group container rounded-md flex justify-center items-center mx-auto customCard">
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white rounded-md px-3 py-2" style={{backgroundColor: "#c27137"}}>
                        {props.projectName}
                    </span>
                    <div className="pt-8 text-center">
                        <a href={props.repo}>
                            <button className="text-center rounded-md bg-black px-4 py-3 m-2 text-[#c27137] font-bold text-lg">
                                GitHub Repo
                            </button>
                        </a>
                        <a href={props.deployed}>
                            <button className="text-center rounded-md bg-black px-4 py-3 m-2 text-[#c27137] font-bold text-lg">
                                Deployed Link
                            </button>
                        </a>
                    </div>
                </div>
            </div>
  )
}

export default SingleProject