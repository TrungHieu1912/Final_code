export default function callAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/api/logout`
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${data}`
            },
        })
            //.then((response) => response.json())
            .then((response) => response.json())
            .then((res) => {
                //console.log(res)
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
