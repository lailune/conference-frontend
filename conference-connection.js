function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = { path: '/', ...options };
    if(options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if(optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}


/**
 * Init conference controller
 * @return {Promise<void>}
 */
async function init() {
    let roomName = APP.conference.roomName;
    let authId = getCookie('aid');
    authId = authId ? authId : '';

    console.log('Connected room', roomName);
    console.log('Authorization id', authId);
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