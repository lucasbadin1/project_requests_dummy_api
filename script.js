async () => {
    try {
        const getUsersCreated = await fetch('https://dummyapi.io/data/v1/user?created=1', {
            headers: {
                "app-id": "<seu id>"
            },
        });

        const users = await getUsersCreated.json();
        console.log(users.data)
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Requisição finalizada');
    }
};


async () => {

    const userData = {
        firstName: "Lucas",
        lastName: "Prado",
        email: "lubagopra@hotmail.com",
    };

    try {
        await fetch('https://dummyapi.io/data/v1/user', {
            method: "POST",
            headers: {
                "app-id": "<seu-id>",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Requisição finalizada');
    }
};


async () => {
    try {
        const getUserById = await fetch('https://dummyapi.io/data/v1/user/<id do usuário>', {
            headers: {
                "app-id": "<seu id>"
            },
        });

        const userById = await getUserById.json();
        console.log(userById.data)
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Requisição finalizada');
    }
};



