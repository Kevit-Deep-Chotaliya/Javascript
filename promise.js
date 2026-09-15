//Promise creation

//Executor function

const myExecutor = (resolve, reject) => {

    const isTaskCompleted = true;

    if (isTaskCompleted) {
        resolve("Task Completed successfully");
    }
    else {
        reject("Task failed");
    }
};

//create a promise

const myPromise = new Promise(myExecutor);
console.log(myPromise);

//setTimeout() + promise

const getMessage = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Hello after 2 seconds!!!!');
        }, 2000);
    });
};

const message = getMessage();
console.log('Immediately : ', message);

setTimeout(() => {
    console.log('After 2 seconds:', message);
}, 2000);

// getMessage()
//     ↓
// new Promise()
//     ↓
// Promise starts as pending
//     ↓
// setTimeout() waits 2 seconds
//     ↓
// resolve('Hello after 2 seconds!')
//     ↓
// Promise becomes fulfilled

const getUser = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('User data received!');
        }, 3000);

    });
};

const userPromise = getUser();

console.log('Immediately : ', userPromise);
setTimeout(() => {
    console.log('After 3 seconds : ', userPromise)
}, 3000);

//Success and Failure callback functions

//Create a promise for placing an order

const placeOrder = new Promise((resolve, reject) => {
    const orderAvailable = true;

    if (orderAvailable) {
        resolve('order placed successfully');
    }
    else {
        reject('Sorry, item is not available');
    }
});

//Success callback

const handleSuccess = (message) => {
    console.log('Order done')
};

//Failure callback

const handleFailure = (error) => {
    console.log('some error');
}

//handle both success and failure

placeOrder.then(handleSuccess, handleFailure);


//.catch() with promises - handles rejected/failed Promise.
//    makes the code cleaner and separates success logic from error logic.
//    receives the rejection reason.
//    can handle errors from the Promise chain.

const makePayment = new Promise((resolve, reject) => {

    const paymentSuccessfull = false;

    if (paymentSuccessfull) {
        resolve('payment done');
    }
    else {
        reject('payment failed');
    }
});

makePayment
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


//chaining multiple promises - Promise chaining means running multiple asynchronous operations one after another, where the next operation depends on the result of the previous one.

const login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Login successful!');
        }, 1000);
    });
};

const getUserProfile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${message} user : Joe`);
        }, 2000);
    });
};

login()
    .then((loginMessage) => {
        console.log(loginMessage);

        //return the second promise

        return getUserProfile(loginMessage);
    })
    .then((profile) => {
        console.log(profile);
    })
    .catch((error) => {
        console.log(error);
    })


//Promise.all() - Promise.all() is used when we have multiple independent Promises and we want all of them to complete, but we don't care which one finishes first.
//suppose we want Dashboard data where we fetch several independent pieces of data at the same time.

const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('user profile');
        }, 2000);
    });
};

const getOrders = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('User orders');
        });
    });
};

const getNotifications = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('User notifications');
        });
    });
};

Promise.all([getUserData, getOrders, getNotifications])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log('error');
    });

// If any one Promise rejects, Promise.all() immediately rejects
// and the .catch() block handles the error.


const getMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Menu loaded');
        }, 1000);
    });
};

const getAddress = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Address loaded');
        }, 2000);
    });
};

const checkPayment = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Payment verification failed');
        }, 1500);
    });
};

Promise.all([
    getMenu(),
    getAddress(),
    checkPayment()
])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log('Error:', error);
    });