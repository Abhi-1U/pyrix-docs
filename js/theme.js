function togglelight() {
    document.body.setAttribute('data-md-color-scheme','defualt');
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
    var preference = localStorage.getItem('themepref');
    if (preference == null) {
        localStorage.setItem('themepref', 'default');
        document.body.setAttribute('data-md-color-scheme', "defualt");
    }
    else {
        document.body.setAttribute('data-md-color-scheme', preference);
    }
}
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var preferenceSwitch = localStorage.getItem('themepref');
if (preferenceSwitch === "slate") {
    toggleSwitch.checked = true;
}
toggleSwitch.addEventListener('change', switchTheme, false);
