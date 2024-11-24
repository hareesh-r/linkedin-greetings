# linkedin-greetings

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function safeClick(selector, delayInMillis) {
    const element = document.querySelector(selector);
    if (element) {
        element.click();
        await delay(delayInMillis);
    } else {
        console.warn(`Element not found for selector: ${selector}`);
    }
}

async function performClick() {
    const delayInMillis = 500;
    try {
        const greetingButtons = document.querySelectorAll('.props-s-cta');

        for (const button of greetingButtons) {
            if (button.tagName !== 'BUTTON') {
                console.warn("Skipping non-button element:", button);
                continue;
            }

            button.click();
            await delay(delayInMillis);

            await safeClick('.msg-form__send-button', delayInMillis);

            await safeClick('svg[data-test-icon="close-small"]', delayInMillis, true);
        }

        alert("All messages were sent!");
    } catch (error) {
        console.error("An error occurred, retrying...", error);
        await delay(2000);
        await performClick();
    }
}

performClick();

```

## Just a short snippet to send wishes to all of the linkedin conntections on [this page](https://www.linkedin.com/mynetwork/catch-up/all/).

# linkedin-accept-all

```javascript
document.querySelectorAll('.invitation-card__action-btn').forEach((ele,ind)=>{
    if(ind%2!=0){
        ele.click();
    }
})
```

## Just a short snippet to accept all connection requests on [this page](https://www.linkedin.com/mynetwork/invitation-manager/)
