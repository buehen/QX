/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

QX:
[rewrite_local]
#Pear闆ⅷ瑙ｉ攣浼氬憳
^https:\/\/(cn.youku-ca.com|bkcd\.b-cdn.net|souhu.mett.me|m.pearkin.com|www.baidu.com2.club)\/(api\/movie\/WatchMovieNew|api\/account\/IsVip|api\/account\/IndexDetail) url script-response-body https://6678888.xyz/quantumultX/pear.js

[mitm]
hostname = bkcd.b-cdn.net,cn.youku-ca.com,souhu.mett.me,m.pearkin.com,www.baidu.com2.club
pear涓嬭浇鍦板潃
https://www.pears.live?ivcode=DUJ7&t=20210504

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const bf = '/api/movie/WatchMovieNew';

const vip = '/api/account/IsVip';

const user = '/api/account/IndexDetail';

if (url.indexOf(bf) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(user) != -1) {
	obj["nickName"] = "ios榛戠鎶€";
   obj["vipLevel"] = "99";
   obj["vipEndTime"] = "2099-09-09";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});