# linkedin-greetings

```javascript
(async function() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function clickButtons() {
        const buttons = Array.from(document.querySelectorAll('button[aria-label^="Message"]'));
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];

            // Click the "Wish" button
            button.click();
            console.log(`Clicked button ${i + 1}`);

            // Wait for the popup to appear
            await delay(1000);

            // Find the "Send" button in the popup
            const sendButton = document.querySelector('button[data-view-name="messaging-modal-send-button"]');
            if (sendButton) {
                sendButton.click();
                console.log(`Clicked send button for button ${i + 1}`);
            } else {
                console.warn('Send button not found, skipping to the next button');
            }

            // Wait for the action to complete before proceeding
            await delay(1000);
        }
    }

    clickButtons();
})();
console.clear();

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
