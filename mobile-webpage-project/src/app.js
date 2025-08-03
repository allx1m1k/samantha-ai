const apiUrl = process.env.API_URL;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('submit-button');
    const inputField = document.getElementById('input-field');

    button.addEventListener('click', () => {
        const inputValue = inputField.value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputValue }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});