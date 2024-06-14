
function fetchDataAndHandleErrors() {
    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
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
          
            document.body.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}


fetchDataAndHandleErrors();
