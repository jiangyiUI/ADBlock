/***********************************************

> 应用名称：Vvebo修复时间线

[rewrite_local]

^https:\/\/api\.weibo\.cn\/2\/users\/show\? url script-request-header https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-request-header https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/profile\/statuses\/tab\? url script-response-body https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js


[mitm]

hostname = api.weibo.cn

***********************************************/
