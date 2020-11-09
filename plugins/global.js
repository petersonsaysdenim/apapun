import Vue from 'vue'

Vue.mixin({
  components: {

  },
  data: function () {
    return {
      route_path: '',
      error: null
    }
  },

  mounted() {
    localStorage.setItem('route_path', $nuxt.$route.path)
    this.route_path = localStorage.getItem('route_path')
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [day, month, year ].join('-');
    },
    formatPrice(value) {
      let val = (value/1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    titleCase(str) {
      let splitStr = str.toLowerCase().split(' ')
      for (let i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
      }
      // Directly return the joined string
      return splitStr.join(' ')
   },

    //SETTING CSRF TOKEN
    getcsrf() {
      return fetch('/api/getcsrftoken').then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        })
      ).then(res => {
          this.$axios.setHeader('X-CSRF-TOKEN', res.data.csrfToken)
      }))
    },

    check(){
      console.log(this.$auth.loggedIn)
    },
    logout() {
      this.$router.push('/')
      this.$toast.show('Logging out...', {icon: "fingerprint"})
      this.$auth.logout()
    },

    // REDIRECT
    goto(param){
      // window.location.href = '/'+param
      this.$router.push(param)
    },

    // GET MASTER DATA
    getMasterData(url) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$get(url).then(function (response) {
            if (response !== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    // GET MASTER DATA ONLY RESPONSE
    getData(url) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$get(url).then( (response) => {
            if (response.data !== undefined) {
              resolve(response.data)
            }
            reject(response.message)
            //console.log(response.data)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    // POST DATA
    postData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data).then( (response) => {
            if (response !== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postDataAPI(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data).then( (response) => {
            if (response.data !== undefined && response.data) {
              resolve(response.data)
            }
            reject(response.message)
          }, (error) => {

            // IF CODE 422 Form Validate
            let status = error.response.status;
            //console.log(status);
            if (status >= 400 && status <= 500) {
              let p = error.response.data;
              //console.log(p);
              // for (var key in p) {
              //   if (p.hasOwnProperty(key)) {
              //     let msg = p[key][0];
              //     reject(msg);
              //   }
              // }
              reject(error.response.data);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    putDocument(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$put(url,data,{
            headers: { 'content-type': 'multipart/form-data' }
          }).then( (response) => {
            if (response.status !== undefined && response.status) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }else {
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postMultipartDataDocuments(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data,{
            headers: { 'content-type': 'multipart/form-data' }
          }).then( (response) => {
            if (response.status !== undefined && response.status) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }else {
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postMultipartData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data,{
            headers: { 'content-type': 'multipart/form-data' }
          }).then( (response) => {
            if (response.status !== undefined && response.status) {
              resolve(response.data)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }else {
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    postNewMember(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$post(url,data,{
            headers: { 'content-type': 'multipart/form-data' }
          }).then( (response) => {
            if (response !== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }else {
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    // DELETE DATA
    deleteData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$delete(url,data).then( (response) => {
            if (response !== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    // PUT DATA
    putData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$put(url,data).then( (response) => {
            if (response!== undefined) {
              resolve(response)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

    // PATCH DATA
    patchData(url,data) {
      return new Promise(
        (resolve, reject) => {
          this.$axios.$patch(url,data).then( (response) => {
            if (response.status !== undefined && response.status) {
              resolve(response.data.result)
            }
            reject(response.message)
          }, (error) => {
            // IF CODE 422 Form Validate
            let status = error.response.status;
            if (status === 422) {
              let p = error.response.data.errors;
              for (var key in p) {
                if (p.hasOwnProperty(key)) {
                  let msg = p[key][0];
                  reject(msg);
                }
              }
              reject(error.response.data.message);
            }
          })
          .catch(function (error) {
            reject(error)
          })
        }
      )
    },

  }
})
