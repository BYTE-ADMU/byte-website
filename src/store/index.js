import {
    // makeAutoObservable,
    makeObservable,
    observable,
    // computed
  } from 'mobx'
  
  // START: STORE CLASS --- ---
  class Store {
    // START: STATES ---
    isOpenSidenav = false
    navbarBtns = [
        {
          id: 0,
          name: "About",
          route: "/about",
          color: "#FFB700"
        },
        {
          id: 1,
          name: "Projects",
          route: "/projects",
          color: "#7A2FF2"
        },
        {
          id: 2,
          name: "Community",
          route: "/community",
          color: "#57CEFE"
        },
        {
          id: 3,
          name: "Partners",
          route: "/partners",
          color: "#33D69F"
        }
      ]
    // END: STATES ---
  
  
    // START: METHODS ---
    // START: CONSTRUCTORS
    constructor() {
      // makeAutoObservable(this)
  
      makeObservable(this, {
        isOpenSidenav: observable,
        navbarBtns:observable
      })
    }
    // END: CONSTRUCTORS
  
    // START: GETTERS
    // END: GETTERS
  
    // START: SETTERS
    /**
     * @name setIsOpenSideNav()
     * @description action to set the boolean value for this.isOpenSideNav
     * @param {*} value 
     */
    setIsOpenSideNav(value) {
      this.isOpenSidenav = value
      console.log(this.isOpenSidenav)
    }//End: setIsOpenSideNav()


    // END: SETTERS
    // END: METHODS ---
  }
  // END: STORE CLASS --- ---
  
  // INSTANTIATE STORE OBJECT
  const store = new Store()

  // EXPORT STORE
  export default store