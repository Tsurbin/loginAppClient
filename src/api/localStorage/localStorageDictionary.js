

export default {
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    userId: "userId",
    role: "role",
    regex:{
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        mediumPassword: /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])))(?=.{8,})/       
    },
    errors:{
        userName: "Invalid email address",
        email: "Invalid email address",
        strongPassword: "notStrong",
        mediumPassword: "Please enter a valid password",
        password: "Password do not meet the minimum strength",
        passwordConfirmation: "Password confirmation must be identical to the password"
    },
    success: {
        
    }
};