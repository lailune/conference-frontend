(async () => {
    console.log('Conference connection init');
    try {
        console.log(await APP.conference.getMyUserId());
        console.log(APP.conference.roomName);
    } catch (e) {
        console.log(e);
    }
})();