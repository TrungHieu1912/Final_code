export default function callAPI(data) {
    return new Promise((resolve, reject) => {
      
      // const url = `http://localhost:3001/items`
      const url = `http://localhost:3000/api/brief`
      fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
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
  