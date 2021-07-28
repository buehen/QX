/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#LUTU瑙ｉ攣VIP鏃犻檺鐪�
^https:\/\/api\.(.+)\.(cn|com)\/.+  url script-request-header lutu.js

[mitm]
hostname = api.jyjnsc.com,api.syclzg.cn

涓嬭浇鍦板潃
https://s-lutu.me
娉ㄥ唽濉啓閭€璇风爜  U08VVA0锛屽欢缁璙IP 鏃堕棿锛�

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'Bearer e6EgBP-lexmTYa9xy8xqWb9QXcnHauNu61OXoqVfJZygFuJ85vfoq3zL6BO2-CZ6JKZmisBjC_dS-P2zx7OtKDAOOvZ9fFLbIBDO0ymSB0o';


$done({headers : modifiedHeaders});