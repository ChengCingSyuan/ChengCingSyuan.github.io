var posts=["2024/10/14/Nezha_Deploy/","2024/10/13/Netcup_Restallation/","2024/10/16/Nezha-Refine/","2024/10/15/PTbox-Installation/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };