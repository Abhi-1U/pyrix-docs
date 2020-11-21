function togglelight() {
    document.body.setAttribute('data-md-color-scheme','default');
    localStorage.setItem('themepref','default');
}
function toggledark() {
    document.body.setAttribute('data-md-color-scheme', 'slate');
    localStorage.setItem('themepref', 'slate');

}
function switchTheme(e) {
    if (e.target.checked) {
        toggledark();
    }
    else {
        togglelight();
    }
}
function loadthemepreference() {
    var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    var preference = localStorage.getItem('themepref');
    if (preference == null) {
        localStorage.setItem('themepref', 'default');
        document.body.setAttribute('data-md-color-scheme', "default");
    }
    else {
        if(preference === "slate"){
            toggleSwitch.checked = true;
        }
        document.body.setAttribute('data-md-color-scheme', preference);
    }
}
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);
