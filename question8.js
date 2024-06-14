
function fetchDataAndDisplay() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}


fetchDataAndDisplay();
