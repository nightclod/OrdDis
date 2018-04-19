var Base = {
    cooInfo : {
        name: null,
        account: null
    },
    gitCookie : function(){
        var arrCookie = document.cookie.split("; ");
        for(var i = 0; i < arrCookie.length; i ++){
            var arr = arrCookie[i].split("=");
            if(arr[0].indexOf("ordDisCookie")> -1){
                this.cooInfo.name = JSON.parse(arr[1]).name;
                return arr[1];
            }
        }
        return "";
    },
    setCookie : function(json){
        var exp = new Date();  
        exp.setTime(exp.getTime() + 60 * 60 * 1000);  
        this.cooInfo.account = json.account;
        document.cookie = "ordDisCookie=" + JSON.stringify(json) + ";expires=" +  exp.toGMTString() + ";path=/";
    },
    updateCookie : function(){
        var arrCookie = document.cookie.split("; ");
        for(var i = 0; i < arrCookie.length; i ++){
            var arr = arrCookie[i].split("=");
            if(arr[0].indexOf("ordDisCooike")> -1){
                var exp = new Date();  
                exp.setTime(exp.getTime() + 60 * 60 * 1000); 
                document.cookie = "ordDisCookie=" + arr[1] + ";expires=" +  exp.toGMTString() + ";path=/";
            }
        }
    }

}

export default Base