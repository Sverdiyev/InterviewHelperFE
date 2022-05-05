// temp token function until login is connected
//autheticate post request
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

export const userEmail = 'test2@test';
export const password = 'test';
