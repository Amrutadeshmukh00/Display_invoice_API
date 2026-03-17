
document.addEventListener('DOMContentLoad', function() {
    fetch('/api/invoice')
        .then(resp =>{
            // if (!resp.ok) {
            //     throw new Error('Error while retrieving invoice: ' + resp.statusText);
            // }
            // return resp.json(); // code won't work due to CORS issue, so we will mock the response
            return {
                items: [
                    { name: 'Item 1', price: '$10' },
                    { name: 'Item 2', price: '$20' },
                    { name: 'Item 3', price: '$30' }
                ]
            };
        })
        .then(data => {
            let html = '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.name} - ${item.price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(er => console.eror("Failed to load invoice:", er));
});
