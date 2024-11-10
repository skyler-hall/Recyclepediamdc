'use client';
import { useState } from "react"

const NewsletterBar = () => {
    const [emailInput, setEmailInput] = useState("")
    const [isInvalidFormat, setIsInvalidFormat] = useState(true)

    const handleInput = (e) => {
        let input = e.target.value 
        setEmailInput(input)
        validateEmail(input)
    }

    //required: input validation
    const validateEmail = (input) => {
        //currently lacks punctuation rules, among some other formatting rules
        let validFormat = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9].+[^a-zA-Z]', 'i') 
        if(validFormat.test(input)) {
            setIsInvalidFormat(false)
        } else 
            setIsInvalidFormat(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
    }

    return (
        <div className="flex p-4 bg-gray-300">
            <h2 className="text-6xl text-right w-2/5 border-r-4 pr-8">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit} className='w-3/4 px-8 m-auto'>
                <label className="text-2xl"> Email: 
                    <input 
                    className="rounded-2xl w-2/3 mx-4 p-1 pl-4"
                    type='email' 
                    value={emailInput}
                    onChange={handleInput}
                    placeholder="Enter email..." 
                    />
                </label>
                <button className="m-auto text-xl rounded-2xl border-none border-2 bg-white p-2 px-6" type='submit' disabled={isInvalidFormat}>Sign Up</button>
            </form>
        </div>
    )
}

export default NewsletterBar