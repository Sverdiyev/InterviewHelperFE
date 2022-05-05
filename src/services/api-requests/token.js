// temp token function until login is connected to be
//generic post request
export const autheticate = async (inputData) => {
  const url = 'https://localhost:3001/User/authenticate';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });
  const data = await res.json();
  return data.token;
};
