async function fetchdata() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/2");

    if (!data.ok) {
      throw new Error(`HTTP Error: ${data.status} ${data.statusText}`);
    }
    const response = await data.json();
    console.log(response);
  } catch (e) {
    console.log("Error caught in function:", e.message);
  } finally {
    console.log("code executed");
  }
}

fetchdata();
