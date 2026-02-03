const token = localStorage.getItem("authToken");
export const getData = async (url)=>{
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  if(!response.ok){
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return await response.json();
}
export const postData = async (url, data)=>{
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  if(!response.ok){
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return await response.json();
}