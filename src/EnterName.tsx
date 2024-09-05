import { useState } from 'react';
import { ContinueButton } from './ContinueButton';

export function EnterName() {
    const [firstName, setFirstName] = useState('');
    const [tempFirstName, setTempFirstName] = useState('');
   

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempFirstName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFirstName(tempFirstName);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input value={tempFirstName} onChange={handleChange} type="text" name="name" />
                </label>
                <button className='submit-button' type="submit">Submit</button>
            </form>
            {firstName && (
                <div className='greeting'>
                    Hello {firstName}! Let's get started.
                    <div>
                    <ContinueButton marketYear={1920}/>
                    </div>
                </div>
            )}
        </div>
    );
}