document.getElementById('product-group').addEventListener('change', function() {
    const selectedGroup = this.value;
    const pcSubOptions = document.getElementById('pc-sub-options');
    const mobileSubOptions = document.getElementById('mobile-sub-options');
    const tabletSubOptions = document.getElementById('tablet-sub-options');

    // Hide all sub-options by default
    pcSubOptions.style.display = 'none';
    mobileSubOptions.style.display = 'none';
    tabletSubOptions.style.display = 'none';

    // Show sub-options based on selected product group
    if (selectedGroup === 'pc') {
        pcSubOptions.style.display = 'block';
    } else if (selectedGroup === 'mobile') {
        mobileSubOptions.style.display = 'block';
    } else if (selectedGroup === 'tablet') {
        tabletSubOptions.style.display = 'block';
    } else if (selectedGroup === 'laptop') {
        // For laptop servicing, show keyboard and mousepad options
        pcSubOptions.style.display = 'block';
    }
});

document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productGroup = document.getElementById('product-group').value;
    let message = `You selected ${productGroup.replace('-', ' ')} servicing.`;
    
    if (productGroup === 'pc') {
        const pcComponent = document.getElementById('pc-component').value;
        message += ` Component: ${pcComponent.toUpperCase()}.`;
    } else if (productGroup === 'mobile') {
        const mobileComponent = document.getElementById('mobile-component').value;
        message += ` Component: ${mobileComponent.replace('-', ' ')}.`;
    } else if (productGroup === 'tablet') {
        const tabletComponent = document.getElementById('tablet-component').value;
        message += ` Component: ${tabletComponent.replace('-', ' ')}.`;
    } else if (productGroup === 'laptop') {
        // For laptop servicing, display generic message
        message += ` No specific component selected.`;
    }

    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
