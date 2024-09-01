function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function performClick() {
    let greetingButtons = document.querySelectorAll('[data-view-name="nurture-card-primary-button"]');

    for (let ele of greetingButtons) {
        ele.click();
        await delay(1000); // 2-second delay

        document.querySelectorAll('[data-view-name="messaging-modal-send-button"]')[0].click();
        await delay(1000); // 2-second delay

        document.querySelector('[aria-label="Dismiss"]').click();
        await delay(1000); // 2-second delay
    }
    alert("All were messages sent!!");
}

performClick();
