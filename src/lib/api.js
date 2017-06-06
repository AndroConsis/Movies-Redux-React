class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static xhr(route, params, verb) {
    const host = 'https://api.themoviedb.org/3'
    const apiKey = 'api_key=f1281a1b61b0c9484a206eb2a84d2ca0'
    const url = `${host}${route}${apiKey}`
    let options = Object.assign({ method: verb });
    options.headers = Api.headers()
    console.log(url, options);
    return fetch(url, options).then( resp => {
      debugger
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }
}
export default Api

// bacf7908