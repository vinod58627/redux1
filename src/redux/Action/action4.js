export const VIN = "VIN"

export const vinPosts = ()=> (dispatch)=>{

    fetch("http://localhost:7075/vin")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: VIN,
                        payload: data });
    })

}