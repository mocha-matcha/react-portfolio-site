import { useState } from "react";

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function ContactPage() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    let errorList = []
    const [errorMessages, setErrorMessage] = useState(errorList);

    const submitManager = (event) => {
        event.preventDefault();

        // clear error list before checking for new ones
        setErrorMessage(errorList);
        if (!checkEmail(email)) {

            // setErrorMessage('The email is not valid!')
            setErrorMessage(errorMessage => [...errorMessage, 'The email is not valid! '])
        }
        if (!userName) {

            setErrorMessage(errorMessage => [...errorMessage, 'User name was left empty! Please fill it in. '])
            // setErrorMessage('User name was left empty! Please fill it in.')
        }
        if (!message) {
            // setErrorMessage('message was left empty! Please fill it in.')
            setErrorMessage(errorMessage => [...errorMessage, 'message was left empty! Please fill it in. '])
        }



        setEmail('');
        setUserName('');
        setMessage('');
    }


    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
        switch (inputType) {
            case 'userName':
                setUserName(inputValue);
                break;
            case 'email':
                setEmail(inputValue);
                break;
            case 'message':
                setMessage(inputValue);
                break;

            default:
                break;
        }

    }
    // name,email.message

    return (<div>
        <h1>Contact!</h1>
        <form className="form" onSubmit={submitManager}>
            <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="message"
            />
            <button type="submit">Submit</button>

        </form>
        {errorMessages.length > 1 ? (

                    <button>{errorMessages}</button>
         

   
        ):(<></>) }

    </div>);
}