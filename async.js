//async keyword -  The async keyword is used to create a function that works with asynchronous operations.
//An async function always returns a Promise.

const getUser = async () => {
    return 'Margetta toni';
};

getUser()
    .then((name) => {
        console.log(`Welcome ${name}`);
    })
    .catch((error) => {
        console.log('error');
    });

//await keyword - await is used inside an async function to wait for a Promise to settle and get its resolved value.

const login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Login successful!!');
        }, 2000);
    });
};

const userLogin = async () => {
    const message = await login();

    console.log(message);
};

userLogin();

//async functions 

const bookTicket = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ticket booked successfully');
        }, 2000);
    });
};

//without await

const wrongBooking = async () => {
    const result = bookTicket();

    console.log(result);
};

//with await

const correctBooking = async () => {
    const result = await bookTicket();

    console.log(result);
};

wrongBooking();
correctBooking();


//handling dependent Promises using async...await

//Example -> Login -> Get userID for ACcount

const bankLogin = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1001);
        }, 1000);
    });
};

const getAccount = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Account details for ${userId}`);
        }, 2000);
    });
};

const showAccount = async () => {
    const userId = await bankLogin();

    console.log(`User ID : ${userId}`);

    const account = await getAccount(userId);

    console.log(account);
};

showAccount();

//Handling errors - using try...catch

const placeOrder = () => {
    return new Promise((resolve, reject) => {
        const orderAvailable = false;

        if (orderAvailable) {
            resolve('Order placed successfully!');
        } else {
            reject('Sorry, the item is out of stock.');
        }
    });
};

const orderFood = async () => {
    try {
        const message = await placeOrder();

        console.log(message);
    } catch (error) {
        console.log('Order failed:', error);
    }
};

orderFood();


//handling independent promises - which are not dependent on each other to run, they can run independently.


const downloadImage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Image downloaded');
        }, 3000);
    });
};

const downloadVideo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Video downloaded');
        }, 2000);
    });
};

const downloadFiles = async () => {
    // Start both operations immediately
    const imagePromise = downloadImage();
    const videoPromise = downloadVideo();

    // Wait for their results
    const image = await imagePromise;
    const video = await videoPromise;

    console.log(image);
    console.log(video);
};

downloadFiles();

//await Promise.all()

const bookFlight = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Flight booked');
        },3000);
    });
};

const bookHotel = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hotel booked');
        },2000);
    });
};

const getInsurance = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Insurance booking done');
        },1000);
    });
};

const prepareTrip = async () => {
    try {
        const results = await Promise.all
        ([
                bookFlight(),
                bookHotel(),
                getInsurance()
            ]);

            console.log(results);
    }
    catch (error) {
        console.log(error)
    }
}

prepareTrip();