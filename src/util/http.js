




export async function handleSelectImage({signal}){
    const response = await fetch('http://localhost:8000/getUsers/images', {signal});

    if(!response.ok){
        const error =  new Error("Could fetch the image Data")
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();
    console.log(data)

    return data
}


export async function fetchStudentData({id, signal}){
    const response = await fetch(`http://localhost:8000/getUsers/${id}`, {signal})

    if(!response.ok){
        const error = new Error('An error occurred while fetching the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json()

    return data
}

