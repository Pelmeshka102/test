// import bridge from '@vkontakte/vk-bridge';


vkBridge.send("VKWebAppInit");
// Отправка события 
vkBridge.send("VKWebAppGetUserInfo"); 
 // Подписка на событие-результат 
 vkBridge.subscribe((e) => { 
if(e.type == 'VKWebAppGetUserInfoResult') { 
   console.log(e.data.status); 
}});