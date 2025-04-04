'use client'

interface Props {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  return  (
  <div className="bg-red-400 mx-auto p-5 rounded-md text-white mt-[200px] w-[90%] max-w-[500px]">
  <h1 className="font-semibold text-center">Üzgünüz bir sorun oluştu</h1>
  <p className="my-5 text-center">{error.name}</p>
  
  
  <div className="flex justify-center">
    <button onClick={reset} className="border py-1 px-3 rounded-md cursor-pointer">Tekrar Dene</button>
  </div>
  </div>

  
  )
}

export default Error;
