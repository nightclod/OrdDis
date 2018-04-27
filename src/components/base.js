var Base = {
    loopCookie: function(cd){
        var arrCookie = document.cookie.split("; ");
        for(var i = 0; i < arrCookie.length; i ++){
            var arr = arrCookie[i].split("=");
            if(arr[0].indexOf("ordDisCookie") > -1){
                cd(arr[1]);
                break;
            }
        }
    },
    getCookie : function(infoStart){
        var sty = false,
            that = this;
        this.loopCookie(function(info){
            sty = infoStart ? JSON.parse(info) : true;
        });
        return sty;
    },
    setCookie: function(data){
        var exp = new Date();
        exp.setTime(exp.getTime() + 60 * 60 * 1000);  
        document.cookie = "ordDisCookie=" + JSON.stringify(data) + ";expires=" +  exp.toGMTString() + ";path=/";
    },
    updateCookie : function(data){
        this.loopCookie(function(){
            var exp = new Date();  
            exp.setTime(exp.getTime() + 60 * 60 * 1000); 
            document.cookie = "ordDisCookie=" + data + ";expires=" +  exp.toGMTString() + ";path=/";
        });
    },
    deleteCookie : function(){
        this.loopCookie(function(data){
            var exp = new Date();  
            exp.setTime(exp.getTime() - 1); 
            document.cookie = "ordDisCookie=" + data + ";expires=" +  exp.toGMTString() + ";path=/";
        });
    }

}

export default Base