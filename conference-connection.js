/**
 * Init conference controller
 * @return {Promise<void>}
 */
async function init() {
    let roomName = APP.conference.roomName;
    console.log('Connected room', roomName);
}

(async () => {
    console.log('Conference connection init');
    try {
        let interval = setInterval(function () {
            try {
                if(typeof APP.conference.roomName !== "undefined") {
                    clearInterval(interval);
                    init();
                }
            } catch (e) {
            }
        }, 100);
    } catch (e) {
        console.log(e);
    }
})();