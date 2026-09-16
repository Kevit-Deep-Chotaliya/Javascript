//GET request

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {

        // Check if request was successful
        if (response.ok) {
            return response.json();
        }

        throw new error('Request failed');
    })
    .then((data) => {
        console.log(data);                   //Full API data

        console.log(data.name);              //specific data                                          
        console.log(data.company.name);      //specific data
    })
    .catch((error) => {
        console.log('Error : ', error.message);
    });


//POST Request

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'My First Post',
        body: 'Learning POST requests with fetch',
        userId: 1
    })
})
    .then((response) => {

        //Full response object
        console.log('Full Response : ', response);

        //check the HTTP Response

        if (response.ok) {
            return response.json();
        }
        throw new error(`Request failed : ${response.status}`);
    })
    .then((data) => {
        // Full response data
        console.log('Full Data:', data);

        // Specific response data
        console.log('Post ID:', data.id);
        console.log('Title:', data.title);
        console.log('User ID:', data.userId);
    })
    .catch((error) => {

        // Network error OR thrown error
        console.log('Error:', error.message);
    });


// async await GET Request

const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (response.ok) {
            const products = await response.json();

            console.log('All Products: ', products);

            return;
        }
        throw new Error(`HTTP Error : ${response.status}`);
    }
    catch (error) {
        console.log(`Error : ${error.message}`);
    }
}
getProducts();

//async await POST Request

const createProduct = async () => {
    try {
        const product = {
            title: 'Wireless Mouse',
            price: 700,
            category: 'Electronics'
        }

        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {

            const data = await response.json();

            console.log(data);

            return;
        }
        throw new Error(`HTTP Error : ${response.status}`);
    }
    catch (error) {
        console.log(error);
    }
}

createProduct();
