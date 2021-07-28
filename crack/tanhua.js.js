/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#鎺㈣姳瑙ｉ攣VIP浼氬憳
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo url script-response-body tanhua.js

[mitm]
hostname = 1008610010.laikanshu.top

鎺㈣姳涓嬭浇鍦板潃
https://tanhua.app

*/


let obj = JSON.parse($response.body);
obj = {
  "status": "200",
  "msg": "杩斿洖鎴愬姛",
  "data": {
    "member_name": "ios榛戠鎶€",
    "mobile": "18800000808",
    "head_pic": "http://999.junc.vip/uploads/admin/202010/5f9b91e0a6fe0.jpg",
    "parent_id": 206,
    "user_viptime": "2099-09-09",
    "status": 1,
    "is_vip": 1
  }
}
;

$done({body: JSON.stringify(obj)});