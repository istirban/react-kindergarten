export const getGroups = async () => {
    const response = await fetch("/groups", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(response)
    return response.json();
  };