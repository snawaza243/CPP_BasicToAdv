import React, { useState } from 'react';

function QuestionAnswerForm({ question, correctAnswer="option2" }) {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        if (selectedAnswer === correctAnswer) {
            setResult('Correct!');
        } else {
            setResult('Incorrect');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{question}</h2>
            <div>
                <input type="radio" value="option1" checked={selectedAnswer === 'option1'} onChange={event => setSelectedAnswer(event.target.value)} />
                Option 1
            </div>
            <div>
                <input type="radio" value="option2" checked={selectedAnswer === 'option2'} onChange={event => setSelectedAnswer(event.target.value)} />
                Option 2
            </div>
            <div>
                <input type="radio" value="option3" checked={selectedAnswer === 'option3'} onChange={event => setSelectedAnswer(event.target.value)} />
                Option 3
            </div>
            <button type="submit">Submit</button>
            {result && <p>{result}</p>}
        </form>
    );
}

export default QuestionAnswerForm;
