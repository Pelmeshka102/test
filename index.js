import bridge from '/vkontakte/vk-bridge';


bridge.send("VKWebAppInit");
// Отправка события 
bridge.send("VKWebAppGetUserInfo"); 
 // Подписка на событие-результат 
bridge.subscribe((e) => { 
if(e.type == 'VKWebAppGetUserInfoResult') { 
   console.log(e.data.status); 
}});