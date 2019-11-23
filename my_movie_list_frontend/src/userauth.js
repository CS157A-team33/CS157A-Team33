var UserAuth = (function() {
    var name = '';
    var email = '';
    var auth = false;
  
    var setName = function(name){
        this.name = name;
    }
    var getName = function(){
        return this.name;
    }
  
    var setEmail = function(user_email){
        this.email = user_email;
    }
  
    var getEmail = function(){
        return this.email;
    }
  
    var setAuth = function(authenticate){
        this.auth = authenticate;
    }
        
    var getAuth = function(){
        if(this.auth === undefined){
            return false;
        }
        return this.auth;
    }

    return {
        setName: setName,
        getName: getName,
        setEmail: setEmail,
        getEmail: getEmail,
        setAuth: setAuth,
        getAuth: getAuth
      }

  })();

export default UserAuth;