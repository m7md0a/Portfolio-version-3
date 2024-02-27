import React from 'react'
import ContainerApp from '../ContainerApp'

export default function MyCom() {
    const images =  [1,2,3,4,5,6,7,8,9,10]

    function getCol(colIndex: number) {
        return images.filter((resource:any, index: number)=>{
            if (index === 0 && colIndex === 1) {
                return true
            }
            else if (index != 0){
                return index % 3 === colIndex
            }
        })
    }
  return (
    <ContainerApp className='flex justify-center gap-4'>
        { typeof images != 'undefined' && images.length > 0 ? [getCol(0),getCol(1),getCol(2)].map((col, indx)=>{
            return <div key={indx} className='flex flex-col gap-4 justify-center py-8'>
            {col.map((e :any)=> (
                <div className='w-32 h-32 bg-blue-500 rounded-md flex justify-center items-center'
                key={e}
                > {e}</div>
            ))}
            </div>
        }) :
            <div className="h-[85vh] col-span-full flex justify-center items-center">
                <h1 className="text-xl text-base-content/70 font-medium">No Image yet</h1>
            </div>
        }
    </ContainerApp>
  )
}