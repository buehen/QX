/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛泂7aa.cn
姝よ鍒欑敱 Aoyt 鎻愪緵锛岃阿璋�

QX:
[rewrite_local]
#鐧句附瀹В閿乂IP
^http?:\/\/1\.blg\d{3}\.xyz\/api\/(video\/index\/details|user\/profile\/index|user\/Profile\/index) url script-response-body https://6678888.xyz/quantumultX/blg.js

[mitm]
hostname = 1.blg\d{3}.xyz

涓嬭浇鍦板潃锛氾紙闇€鑷鎴栬秺鐙憋級
https://hkj.lanzous.com/ie7zAnexo2b

缃戦〉鐗堬細锛堟棤璇佷功鍙娇鐢ㄧ綉椤电増锛�
http://1.blg579.xyz

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/api/video/index/details';
const p2 = '/api/user/profile/index';
const p3 = '/api/user/Profile/index'



if (url.indexOf(p1) != -1) {
	obj.d.category.access = "all";
     obj.d.watch_data.remaining_watch_time = 999;
     obj.d.video.advertisement_status = "N";
     obj.d.advertisement.top.target = "N";
	body = JSON.stringify(obj);
 }

if (url.indexOf(p2) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

if (url.indexOf(p3) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_download_count = 9999;
     obj.d.user_tv_count = 9999;
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

$done({body});