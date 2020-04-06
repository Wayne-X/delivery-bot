function main(){
  console.log("Delivery bot is running:", new Date());
  handlePermissions();
  if (deliveryAvailable()) {
    notifyDeliveryAvailable();
    return;
  }
  reload();
}

function handlePermissions(){
  if (Notification.permission != "granted") {
    Notification.requestPermission().then((result)=>{console.log(result)});
  }
}

function deliveryAvailable() {
  return pageContains("Select Delivery Time") && !pageContains("No delivery windows available");
}

function pageContains(text) {
  return document.documentElement.innerText.search(text) != -1;
}

function notifyDeliveryAvailable() {
  new Notification("Delivery slots are available");
}

function reload(){
  setTimeout(function() {
    location.reload();
  }, 60 * 1000 /* 60 seconds */);
}

main();
