function main(){
  console.log("Delivery bot is running:", new Date());
  handlePermissions();
  if (deliveryAvailable()) {
    notifyDeliveryAvailable();
  }
  reload();
}

function handlePermissions(){
  if (Notification.permission != "granted") {
    Notification.requestPermission().then((result)=>{console.log(result)});
  }
}

function deliveryAvailable() {
  return document.documentElement.innerText.search("No delivery windows available") == -1;
}

function notifyDeliveryAvailable() {
  new Notification("Delivery slots are available");
}

function reload(){
  setTimeout(function() {
    location.reload();
  }, 30000);
}

main();