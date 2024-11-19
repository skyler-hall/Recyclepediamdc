'use client';
import { useState } from "react"

const NewsletterBar = () => {
    const [emailInput, setEmailInput] = useState("")
//    const [isInvalidFormat, setIsInvalidFormat] = useState(true)

    const handleInput = (e) => {
        let input = e.target.value 
        setEmailInput(input)
//        validateEmail(input)
    }

    // //required: input validation
    // const validateEmail = (input) => {
    //     //currently lacks punctuation rules, among some other formatting rules
    //     let validFormat = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9].+[^a-zA-Z]', 'i') 
    //     if(validFormat.test(input)) {
    //         setIsInvalidFormat(false)
    //     } else 
    //         setIsInvalidFormat(true)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailInput('')
        //rest...
    }

    return (
        <div className="bg-[#a9def9] flex p-4 py-8 px-2 -mx-4 md:-mx-20 -mt-8 -mb-8 lg:-mx-12">
            <h2 className="text-l sm:text-3xl md:text-5xl lg:text-6xl text-left text-black w-2/5 border-r-2 md:border-r-4 border-[#DBF4D2] px-2 md:ml-10 lg:pr-4">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit} className='w-3/5 px-2 md:px-8 m-auto'>
                <label className="text-xs sm:text-xl md:text-2xl"> Email:
                    <input 
                    className={`rounded-2xl w-1/3 sm:w-1/2 md:w-5/12 lg:w-7/12 mx-1 md:mx-4 py-1 pl-2 md:pl-4`}
                    type='email' 
                    value={emailInput}
                    onChange={handleInput} 
                    placeholder='example@gmail.com'
                    required
                    />
                </label>
                <button className={`m-auto text-xs sm:text-base md:text-xl rounded-2xl border-none bg-[#DBF4D2] p-1 px-3 md:px-6`} type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default NewsletterBar