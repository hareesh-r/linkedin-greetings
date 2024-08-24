function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function performClick() {
    let greetingButtons = document.querySelectorAll('.props-s-message-button__container');

    for (let ele of greetingButtons) {
        ele.querySelector('button').click();
        await delay(2000); // 2-second delay

        document.querySelectorAll('.msg-form__send-button')[0].click();
        await delay(2000); // 2-second delay

        document.querySelectorAll('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view')[document.querySelectorAll('.msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view').length-1].click();
        await delay(2000); // 2-second delay
    }
}

performClick();
