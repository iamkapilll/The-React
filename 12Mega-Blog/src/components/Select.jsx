import React, {useId} from 'react'

function Select({
    options,
    label,
    className, //className="" as said by chai aur code
    ...props
}, ref) {

    const id = useId()

  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
            
            {options?.map((option) =>{
                <option key={option} value={option}>
                    {option}
                </option>
            })}
        </select>
    </div>
  )
}

export default React.forwardRef(Select) // the another way for giving reference,,,, first way to give reference is defined in Input.jsx


            // {options?.map((option) =>{    // here in this conditon if we have used like:  {options.map((option)        without that ? then it would have crashed definitely if there is no any values in options to map so for that we did like if there is some values options then only do map, it avoids crash
            //     <option key={option} value={option}>
            //         {option}
            //     </option>
            // })}