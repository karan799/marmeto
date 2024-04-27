

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart-button');
    const notification = document.querySelector('.cart-notification');
    const notificationMessage = document.querySelector('.notification-message');

    let selectedColor = ""; // Variable to store selected color

    function selectColor(color) {
        selectedColor = color;

        const allIndicators = document.querySelectorAll('.selected-color-indicator');
        allIndicators.forEach(indicator => {
            indicator.style.display = 'none';
        });

        const selectedColorIndicator = document.querySelector(`.color-swatch-${selectedColor} + .selected-color-indicator`);
        if (selectedColorIndicator) {
            selectedColorIndicator.style.display = 'block';
        }
    }
    selectColor("yellow");

    document.querySelector('.color-options').addEventListener('click', function(event) {
        if (event.target.closest('.color-option')) {
            selectColor(event.target.getAttribute("class").trim().toLowerCase().slice(13));
        }
    })

    let selectedSize = ""; // Variable to store selected size

    function setSelectedSize() {
        const selectedRadio = document.querySelector('input[name="size"]:checked');
        if (selectedRadio) {
            selectedSize = selectedRadio.value;
            document.querySelectorAll('.size-option').forEach(option=> {
                option.classList.remove("size-option-selected")
            });
            selectedRadio.closest('.size-option').classList.add('size-option-selected');
            selectedRadio.closest('.size-option-circle').classList.add('size-option-circle-selected');
        }
    }

    document.querySelectorAll('input[name="size"]').forEach(radio => {
        radio.addEventListener('change', setSelectedSize);
    });

    setSelectedSize();

    let quantity = 1; // Initial quantity value

    const quantityDecreaseBtn = document.querySelector('.quantity-decrease');
    const quantityIncreaseBtn = document.querySelector('.quantity-increase');
    const quantityValue = document.querySelector('.quantity-value');
    const sizeOptions = document.querySelectorAll('.size-option');

    quantityDecreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });

    quantityIncreaseBtn.addEventListener('click', function() {
        quantity++;
        quantityValue.textContent = quantity;
    });

    sizeOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            sizeOptions.forEach(function(option) {
                option.classList.remove('size-option--selected');
            });
            option.classList.add('size-option--selected');
        });
    });

    addToCartButton.addEventListener('click', function () {
        notification.style.display = 'block';
        notificationMessage.textContent = `Embrace Sideboard with Color ${selectedColor} and  Size ${selectedSize} added to cart`;

        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    });
});
