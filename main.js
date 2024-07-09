
        // alert('This website is currently under development');

        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
        });

        // Check if the refreshButton element exists before adding the event listener
        const refreshButton = document.getElementById('refreshButton');
        if (refreshButton) {
            refreshButton.addEventListener('click', function() {
                location.reload();
            });
        }
        
         // Function to create a typing effect
         function typeEffect(element, speed) {
            let text = element.getAttribute('data-text');
            element.innerHTML = '';

            text.split('').forEach(function (char, index) {
                setTimeout(function () {
                    element.innerHTML += char;
                }, speed * index);
            });

            // After typing, wait for a short time and then call the function again
            setTimeout(function () {
                typeEffect(element, speed);
            }, speed * text.length + 1000); // Adjust the delay before restarting (milliseconds)
        }

        // Get the element by id
        const typingElement = document.getElementById('typing-effect');

        // Set the original text as a data attribute
        typingElement.setAttribute('data-text', typingElement.textContent);

        // Call the typing effect function
        typeEffect(typingElement, 100); // Adjust the speed (milliseconds per character) as needed



        // Get the select elements for desktop and mobile menus
        var desktopLanguageSelect = document.getElementById('desktopLanguageSelect');
        var mobileLanguageSelect = document.getElementById('mobileLanguageSelect');

        // Get all elements with the language-content class
        var languageContentElements = document.querySelectorAll('.language-content');

        // Load the selected language from local storage
        var selectedLanguage = localStorage.getItem('selectedLanguage');

        // Set the initial selected language
        if (selectedLanguage) {
            desktopLanguageSelect.value = selectedLanguage;
            mobileLanguageSelect.value = selectedLanguage;
            toggleContentVisibility();
        }

        // Add event listeners to the select elements
        desktopLanguageSelect.addEventListener('change', handleLanguageChange);
        mobileLanguageSelect.addEventListener('change', handleLanguageChange);

        // Function to handle language change
        function handleLanguageChange() {
            console.log('Language changed');
            // Get the selected value
            var selectedValue = this.value;

            // Save the selected language to local storage
            localStorage.setItem('selectedLanguage', selectedValue);

            // Toggle visibility based on the selected value
            toggleContentVisibility();
        }

        // Function to toggle content visibility based on the selected language
        function toggleContentVisibility() {
            console.log('Toggling content visibility');
            var selectedValue = desktopLanguageSelect.value;

            // Toggle visibility based on the selected value for each language-content element
            languageContentElements.forEach(function (element) {
                if (selectedValue === 'en' && element.classList.contains('english-content')) {
                    element.classList.remove('hidden');
                } else if (selectedValue === 'id' && element.classList.contains('bahasa-content')) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
            });
        }
