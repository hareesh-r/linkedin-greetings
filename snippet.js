// Utility function for introducing a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to click on an element if it exists
async function safeClick(selector, delayInMillis) {
    const element = document.querySelector(selector);
    if (element) {
        element.click();
        await delay(delayInMillis);
    } else {
        console.warn(`Element not found for selector: ${selector}`);
    }
}

// Main function to perform the click operations
async function performClick() {
    const delayInMillis = 500; // Time delay between actions
    try {
        // Get all greeting buttons with the specified class
        const greetingButtons = document.querySelectorAll('.props-s-cta');

        for (const button of greetingButtons) {
            // Ensure the element is a button before proceeding
            if (button.tagName !== 'BUTTON') {
                console.warn("Skipping non-button element:", button);
                continue;
            }

            // Click the greeting button
            button.click();
            await delay(delayInMillis);

            // Click the send button
            await safeClick('.msg-form__send-button', delayInMillis);

            // Click the close button of the message overlay
            await safeClick('svg[data-test-icon="close-small"]', delayInMillis, true);
        }

        // Notify the user that the operation is complete
        alert("All messages were sent!");
    } catch (error) {
        console.error("An error occurred, retrying...", error);

        // Delay before retrying in case of an error
        await delay(2000);
        await performClick(); // Recursively call the function to retry
    }
}

// Start the automation
performClick();
