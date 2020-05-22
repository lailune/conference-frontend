(async () => {
    console.log('Conference connection init');
    try {
        console.log(await APP.conference.getMyUserId());
    } catch (e) {
        console.log(e);
    }
});