console.log('====================================');
console.log("Connected");
console.log('====================================');
const product={
    "product": {
        "id": 6937548554342,
        "title": "Embrace Sideboard",
        "description": "<p data-mce-fragment=\"1\">The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>",
        "vendor": "Marmeto",
        "product_type": "Cloth",
        "price": "$12999",
        "compare_at_price": "$19999",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "Yellow": "#ECDECC"
                    },
                    {
                        "Green": "#BBD278"
                    },
                    {
                        "Blue": "#BBC1F8"
                    },
                    {
                        "Pink": "#FFD3F8"
                    }
                ]
            },
            {
                "name": "Size",
                "position": 2,
                "values": [
                    "Small",
                    "Medium",
                    "Large",
                    "Extra large",
                    "XXL"
                ]
            }
        ],
        "images": [
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731"
            }
        ]
    }

}
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-button');
    const notification = document.querySelector('.cart-notification');
    const notificationMessage = document.querySelector('.notification-message');


    
        const quantityDecreaseBtn = document.querySelector('.quantity-decrease');
        const quantityIncreaseBtn = document.querySelector('.quantity-increase');
        const quantityValue = document.querySelector('.quantity-value');
        const sizeOptions = document.querySelectorAll('.size-option');

        
    let selectedColor = ""; // Variable to store selected color
    
    function selectColor(color) {
        // Update selected color
        selectedColor = color;

        const allIndicators = document.querySelectorAll('.selected-color-indicator');
        allIndicators.forEach(indicator => {
            indicator.style.display = 'none';
        });
    
        // Show indicator for the selected color
        const selectedColorIndicator = document.querySelector(`.color-swatch-${selectedColor} + .selected-color-indicator`);
        if (selectedColorIndicator) {
            selectedColorIndicator.style.display = 'block';
        }
        // Update UI to indicate selected color (you can add your own logic here)
        console.log("Selected color:", selectedColor);
    }
    selectColor("green");
    
    document.querySelector('.color-options').addEventListener('click', function(event) {
        if (event.target.closest('.color-option')) {
            selectColor(event.target.getAttribute("class").trim().toLowerCase().slice(13)); // Assuming size text is lowercase
        }
    })
    // Variable to store selected size

    let selectedSize = ""; // Variable to store selected size

function setSelectedSize() {
    const selectedRadio = document.querySelector('input[name="size"]:checked');
    if (selectedRadio) {
        selectedSize = selectedRadio.value;
        document.querySelectorAll('.size-option').forEach(option=> {
            option.classList.remove("size-option-selected")
        });
        // Update UI to indicate selected size (you can add your own logic here)
        console.log("Selected size:", selectedSize);
        selectedRadio.closest('.size-option').classList.add('size-option-selected');
        selectedRadio.closest('.size-option-circle').classList.add('size-option-circle-selected');
    }
}

// Listen for changes in the radio buttons
document.querySelectorAll('input[name="size"]').forEach(radio => {
    radio.addEventListener('change', setSelectedSize);
});

// Example usage:
setSelectedSize(); // Set the initial selected size

    

// document.querySelector('.size-options').addEventListener('click', function(event) {
//     if (event.target.closest('.size-option')) {
//         selectSize(event.target.textContent.trim()); // Get the text content of the clicked size option
//     }
// });


    

    
        let quantity = 1; // Initial quantity value
    
        // Decrease quantity button click event
        quantityDecreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });
    
        // Increase quantity button click event
        quantityIncreaseBtn.addEventListener('click', function() {
            quantity++;
            quantityValue.textContent = quantity;
        });
    
        // Size option click event
        sizeOptions.forEach(function(option) {
            option.addEventListener('click', function() {
                sizeOptions.forEach(function(option) {
                    option.classList.remove('size-option--selected');
                });
                option.classList.add('size-option--selected');
            });
        });

    
    

    addToCartButton.addEventListener('click', function () {
        // Show the notification
        console.log("clicked");
        notification.style.display = 'block';
        notificationMessage.textContent = `Embrace Sideboard with ${selectedColor}  and ${selectedSize} added to cart`;

        // Hide the notification after 3 seconds
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    });
});

console.log("hello");