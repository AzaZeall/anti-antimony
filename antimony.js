if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstorex";
}
const extentions = ["gkmjbghefgphpalbhdchogknfdledhaf", "haldlgldplgnggkjaafhelgiaglafanh", "kjbhikpohdgdbchnlbokilnkakadconi", "kkepemkdiboiecpjlmdmighjkmfokbpm"]
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], true,)
}
alert(`You Re-Enabled GoGuardian! Good job!`)
