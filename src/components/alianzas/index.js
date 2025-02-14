import React from 'react'
const index = () => {
    return (
        <>
              <div className="bg-white px-4 xl:px-0 py-16 ">
           
                    <div className="mx-auto container">
                        <div className="mb-4 lg:mb-20">
                            <h1 className="text-center text-2xl lg:text-5xl text-blue-kai font-custom  tracking-1px">Nuestras Alianzas</h1>
                            {/* <h2 className="text-base lg:text-lg text-center text-color-gray-light font-custom mt-5 tracking-wider">Quienes deciden apoyarnos </h2> */}
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {/* <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72" fill="none">
                                    <circle cx={36} cy={36} r={36} fill="#B0F3FF" />
                                    <circle cx={36} cy={36} r={36} fill="url(#paint0_linear)" />
                                    <path d="M18.9444 37.25H14L36.25 15L58.5 37.25H53.5556" stroke="#00A7C5" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.9444 37.25V54.5556C18.9444 55.8669 19.4653 57.1245 20.3926 58.0518C21.3198 58.9791 22.5775 59.5 23.8888 59.5H48.611C49.9224 59.5 51.18 58.9791 52.1073 58.0518C53.0345 57.1245 53.5555 55.8669 53.5555 54.5556V37.25" stroke="#00A7C5" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M41.1945 37.25H31.3056V47.1389H41.1945V37.25Z" stroke="#00A7C5" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1={36} y1={0} x2={36} y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Home Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div> */}
                            <div className="xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                         xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"       
               >
                <div className="h-64 z-20">
                     <img
                       src="/Cluster-Blanco-RGB-01.jpg"
                       alt="Cluster Impulso Tecnologico"
                       className="h-full w-full object-cover overflow-hidden rounded"
                       width={400}
                       height={300}
                     />
                   </div>
                   <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                     <p className="uppercase text-sm font-custom text-gray-700 text-center pb-1">Cluster de Impulso Tecnologico</p>
                     <a target="_blank" href="https://citargentina.org/" className="text-gray-500 font-custom hover:text-blue-kai text-center pb-1 text-sm">
                     <p className="text-gray-500 font-custom text-center hover:text-blue-kai pb-1 text-sm">Cluster impulso tecnoclogico</p>
                     </a>
                     
                   </div>
                 </div>
                 {/* <div                  
                   className="pl-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                         xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"       
               >
                <div className="h-64 z-20">
                     <img
                       src="/Microsis.jpg"
                       alt="Microsis"
                       className=" h-56 w-full object-top  object-cover   pt-24 pb-12  bg-white rounded"
                  
                     />
                   </div>
                   <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                     <p className="uppercase text-sm font-custom text-gray-700 text-center pb-1">MicroSis</p>
                     <a target="_blank" href="http://www.microsis.com.ar/" className="text-gray-500 font-custom hover:text-blue-400 text-center pb-1 text-sm">
                     <p className="text-gray-500 font-custom hover:text-blue-400 text-center pb-1 text-sm">MicroSis</p>
                     </a>    
                   
                   </div>
                 </div>           */}
                 <div
                   
                   className="pl-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                         xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"       
               >
                <div className="h-64 z-20">
                     <img
                       src="/Logo transparente.png"
                       alt="Asistec"
                       className="  h-full w-full   bg-white  object-cover overflow-hidden rounded"
               
                     />
                   </div>
                   <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                     <p className="uppercase text-sm text-gray-700 font-custom text-center pb-1">Assistec</p>
                     <a target="_blank" href="https://assistec.com.ar/" className="text-gray-500 font-custom hover:text-redNaphtol text-center pb-1 text-sm">
                     <p className="text-gray-500 font-custom hover:text-redNaphtol text-center pb-1 text-sm">Assistec</p>
                     </a>
                   </div>
                 </div>
                 <div
                   
                   className=" pl-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                         xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"       
               >
                <div className="bg-gray h-64 z-20">
                     <img
                       src="/LogoCsc.jpeg"
                       alt="Cluster Tecnologico Santa Cruz"
                       className="h-full  w-full object-cover overflow-hidden rounded"
                      
                     />
                   </div>
                   <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                     <p className="uppercase text-sm text-gray-700 font-custom text-center pb-1">Cluster Tecnologico Santa Cruz</p>
                     <a target="_blank" href="https://clustertecnologicosantacruz.com.ar/" className="text-gray-500 font-custom hover:text-orange-400  text-center pb-1 text-sm">
                     <p className="text-gray-500 font-custom text-center hover:text-orange-400  pb-1 text-sm">Cluster Tecnologico Santa Cruz</p>
                     </a>
                   </div>
                 </div>

{/* 

                            
                            <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={73} height={72} viewBox="0 0 73 72" fill="none">
                                    <ellipse cx="36.2422" cy={36} rx="36.0872" ry={36} fill="#FBD1FF" />
                                    <ellipse cx="36.2422" cy={36} rx="36.0872" ry={36} fill="url(#paint0_linear)" />
                                    <path d="M22.6666 53.6667C25.6121 53.6667 27.9999 51.2789 27.9999 48.3333C27.9999 45.3878 25.6121 43 22.6666 43C19.7211 43 17.3333 45.3878 17.3333 48.3333C17.3333 51.2789 19.7211 53.6667 22.6666 53.6667Z" stroke="#EC82F6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M49.3333 53.6667C52.2789 53.6667 54.6667 51.2789 54.6667 48.3333C54.6667 45.3878 52.2789 43 49.3333 43C46.3878 43 44 45.3878 44 48.3333C44 51.2789 46.3878 53.6667 49.3333 53.6667Z" stroke="#EC82F6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M36 32.3333V19M17.3333 48.3333H12V32.3333L17.3333 19H41.3333L52 32.3333H54.6667C56.0812 32.3333 57.4377 32.8952 58.4379 33.8954C59.4381 34.8956 60 36.2522 60 37.6667V48.3333H54.6667H17.3333ZM44 48.3333H28H44ZM12 32.3333H52H12Z" stroke="#EC82F6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="36.2422" y1={0} x2="36.2422" y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Car Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div>
                            <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72" fill="none">
                                    <circle cx={36} cy={36} r={36} fill="#DAFFD3" />
                                    <circle cx={36} cy={36} r={36} fill="url(#paint0_linear)" />
                                    <path
                                        d="M16.0326 37.5154C14.7141 36.2527 13.6755 34.7349 12.9823 33.0577C12.289 31.3806 11.9562 29.5803 12.0046 27.7703C12.0531 25.9603 12.4818 24.1798 13.2638 22.5408C14.0457 20.9019 15.164 19.4401 16.5483 18.2474C17.9325 17.0547 19.5526 16.1571 21.3067 15.6109C23.0607 15.0647 24.9106 14.8819 26.74 15.074C28.5694 15.2661 30.3385 15.8288 31.936 16.7268C33.5335 17.6249 34.9248 18.8387 36.0222 20.2919C37.1244 18.8493 38.5173 17.646 40.1137 16.7575C41.7101 15.869 43.4757 15.3144 45.2999 15.1283C47.1241 14.9423 48.9677 15.1288 50.7153 15.6762C52.4629 16.2237 54.0769 17.1202 55.4563 18.3098C56.8356 19.4994 57.9507 20.9563 58.7316 22.5895C59.5125 24.2227 59.9425 25.9969 59.9946 27.8012C60.0468 29.6054 59.72 31.4009 59.0346 33.0751C58.3493 34.7493 57.3203 36.2663 56.0119 37.5311"
                                        stroke="#81D371"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M36.0834 27V45.1667" stroke="#81D371" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27 36.0833H45.1667" stroke="#81D371" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1={36} y1={0} x2={36} y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Life Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div>
                            <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72" fill="none">
                                    <circle cx={36} cy={36} r={36} fill="#FFF4B4" />
                                    <circle cx={36} cy={36} r={36} fill="url(#paint0_linear)" />
                                    <path d="M15 57H57" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29 26.6667H31.3333" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29 36H31.3333" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29 45.3335H31.3333" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.6666 26.6667H42.9999" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.6666 36H42.9999" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.6666 45.3335H42.9999" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.6666 57V19.6667C19.6666 18.429 20.1583 17.242 21.0334 16.3668C21.9086 15.4917 23.0956 15 24.3333 15H47.6666C48.9043 15 50.0913 15.4917 50.9664 16.3668C51.8416 17.242 52.3333 18.429 52.3333 19.6667V57" stroke="#C8B544" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1={36} y1={0} x2={36} y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Business Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div>
                            <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={73} height={72} viewBox="0 0 73 72" fill="none">
                                    <ellipse cx="36.2422" cy={36} rx="36.0872" ry={36} fill="#FFDAD1" />
                                    <ellipse cx="36.2422" cy={36} rx="36.0872" ry={36} fill="url(#paint0_linear)" />
                                    <path d="M44.8889 31.9444H54C55.2082 31.9444 56.3669 32.4244 57.2213 33.2787C58.0756 34.1331 58.5556 35.2918 58.5556 36.5C58.5556 37.7082 58.0756 38.8669 57.2213 39.7213C56.3669 40.5756 55.2082 41.0556 54 41.0556H44.8889L35.7778 57H28.9444L33.5 41.0556H24.3889L19.8333 45.6111H13L17.5556 36.5L13 27.3889H19.8333L24.3889 31.9444H33.5L28.9444 16H35.7778L44.8889 31.9444Z" stroke="#CD8675" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="36.2422" y1={0} x2="36.2422" y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Travel Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div>
                            <div className="max-w-sm m-4 bg-white rounded-3xl shadow-md py-6 px-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 72 72" fill="none">
                                    <circle cx={36} cy={36} r={36} fill="#D3D3FF" />
                                    <circle cx={36} cy={36} r={36} fill="url(#paint0_linear)" />
                                    <path d="M14 36.5C14 30.7978 16.2652 25.3292 20.2972 21.2972C24.3292 17.2652 29.7978 15 35.5 15C41.2022 15 46.6708 17.2652 50.7028 21.2972C54.7348 25.3292 57 30.7978 57 36.5H14Z" stroke="#6767CB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M35.5 36.5V52.625C35.5 54.0505 36.0663 55.4177 37.0743 56.4257C38.0823 57.4337 39.4495 58 40.875 58C42.3005 58 43.6677 57.4337 44.6757 56.4257C45.6837 55.4177 46.25 54.0505 46.25 52.625" stroke="#6767CB" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1={36} y1={0} x2={36} y2={72} gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="pt-5">
                                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">Other Insurance</h1>
                                    <p className="mt-4 tracking-wider leading-8 text-base w-11/12 text-color-gray-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices nunc, non at</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
              
        </>
    );
}

export default index;