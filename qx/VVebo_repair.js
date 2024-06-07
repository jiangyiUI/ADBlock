/******************************
QuantumultX 修复 vvebo 用户主页的显示脚本
参考：https://raw.githubusercontent.com/suiyuran/stash/main/override/fix-vvebo.stoverride
2024-05-09：修正在 Quantumult X 1.5.0-830 版本中出现的问题。
*************************

[mitm]
hostname = api.weibo.cn
[rewrite_local]
^https:\/\/api\.weibo\.cn\/2\/users\/show\? url script-request-header https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-request-header https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/profile\/statuses\/tab\? url script-response-body https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/vvebo.js
*************************

*****************************************/
